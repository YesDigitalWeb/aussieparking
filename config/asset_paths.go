package config

var assetPaths = map[string]string{}

func AssetPath(name string) string {
	if path, ok := assetPaths[name]; ok {
		return path
	}

	return name
}
