#!/usr/bin/env bash

git checkout -- config/asset_paths.go
git clean -f public/css
git clean -f public/js
git checkout -- public/css
git checkout -- public/js
rm -f config/prod.json
