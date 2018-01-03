// +build ignore

package main

import (
	"crypto/md5"
	"fmt"
	"io/ioutil"
	"os"
	"path"
	"strings"
	"text/template"

	"path/filepath"
)

func main() {
	csses, err := filepath.Glob("public/css/*")
	if err != nil {
		panic(err)
	}
	jses, err := filepath.Glob("public/js/*")
	if err != nil {
		panic(err)
	}

	cssPaths := map[string]string{}
	for _, css := range csses {
		if stat, err := os.Stat(css); err != nil {
			panic(err)
		} else if stat.IsDir() {
			continue
		}
		cssPaths[strings.Replace(css, "public", "", 1)] = strings.Replace(rename(css), "public", "", 1)
	}
	jsPaths := map[string]string{}
	for _, js := range jses {
		if stat, err := os.Stat(js); err != nil {
			panic(err)
		} else if stat.IsDir() {
			continue
		}
		jsPaths[strings.Replace(js, "public", "", 1)] = strings.Replace(rename(js), "public", "", 1)
	}

	// var buf bytes.Buffer
	apfile, err := os.Create("config/asset_paths.go")
	if err != nil {
		panic(err)
	}
	err = tmpl.Execute(apfile, map[string]map[string]string{
		"CSSPaths": cssPaths,
		"JSPaths":  jsPaths,
	})
	if err != nil {
		panic(err)
	}
}

var tmpl = template.Must(template.New("").Parse(`package config

var assetPaths = map[string]string{
	{{range $k, $v := .CSSPaths}}"{{$k}}": "{{$v}}",
	{{end}}
	{{range $k, $v := .JSPaths}}"{{$k}}": "{{$v}}",
	{{end}}
}

func AssetPath(name string) string {
	if path, ok := assetPaths[name]; ok {
		return path
	}

	return name
}
`))

func rename(name string) string {
	data, err := ioutil.ReadFile(name)
	if err != nil {
		panic(err)
	}
	sum := md5.Sum(data)
	ext := path.Ext(name)
	name = strings.Replace(name, ext, "", 1)

	newName := fmt.Sprintf("%s_%x%s", name, sum, ext)
	if err := os.Rename(name+ext, newName); err != nil {
		panic(err)
	}

	return newName
}
