#!/usr/bin/env bash

set -e

# stop this because of bug in go1.7: https://github.com/golang/go/issues/15728
# go vet ./... || true

pkgs=(
	github.com/theplant/aussie/app/models
	github.com/theplant/aussie/app/controllers
)

echo "start tests"
for pkg in "${pkgs[@]}"
do
	go test $pkg
	# go test $pkg -race -cpu 1,4
done

WEB_ROOT=$GOPATH/src/github.com/theplant/aussie go test github.com/theplant/aussie/app/controllers -run TestAdminAccessIsNormal
