package tpl

import (
	"html/template"
	"path"
	"path/filepath"
	"strings"

	"github.com/theplant/aussie/config"
)

var (
	layouts        = map[string]*template.Template{}
	DefaultFuncMap = template.FuncMap{}
)

func loadLayouts() {
	layoutPath := path.Join(config.Root, "app/views", "layouts", "*")
	if paths, err := filepath.Glob(layoutPath); err == nil {
		for _, p := range paths {
			if t, err := template.New("").Funcs(DefaultFuncMap).ParseFiles(p); err == nil {
				name := strings.TrimSuffix(path.Base(p), ".tmpl")
				layouts[name] = t.Lookup(path.Base(p))
			} else {
				config.ReportError(err)
			}
		}
	} else {
		config.ReportError(err)
	}
}

func getLayout(names []string) (layout *template.Template) {
	layout = layouts["application"]
	if layout == nil || config.IsLocal() {
		loadLayouts()
		layout = layouts["application"]
	}

	var err error
	for _, name := range names {
		if strings.Contains(name, "/") {
			layout, err = template.New("").Funcs(DefaultFuncMap).ParseFiles(path.Join(config.Root, "app/views", name))
			layout = layout.Lookup(filepath.Base(name))
			if err != nil {
				config.ReportError(err)
			}
		} else {
			layout = layouts[name]
		}
	}
	layout, err = layout.Clone()
	if err != nil {
		config.ReportError(err)
	}
	return layout
}

// if layoutName contains "/", it will be loaded independently.
func Template(tpl string, layoutNames ...string) *template.Template {
	layout := getLayout(layoutNames)

	// TODO: should not parse tepmlates everytime.
	fileName := path.Join(config.Root, "app/views", tpl)
	layout, err := layout.ParseFiles(fileName)
	if err != nil {
		config.ReportError(err)
	}

	layout, err = layout.ParseGlob(path.Join(config.Root, "app/views/shared/*"))
	if err != nil {
		config.ReportError(err)
	}

	// TODO: should not parse tepmlates everytime.
	partials, err := layout.ParseGlob(path.Join(path.Dir(fileName), "_*"))
	if err != nil {
		if !strings.HasPrefix(err.Error(), "html/template: pattern matches no files:") {
			config.ReportError(err)
		}

		return layout
	}

	return partials
}
