#!/usr/bin/env bash

set -e

env=$1

if [[ "$env" = "" ]]; then
	echo 'please specify env (dev, prod): bin/deploy.sh dev'
	exit 1
fi

bin/clean_deploy_tmp.sh

if [[ "$env" = "prod" ]]; then
	current_branch=`git rev-parse --abbrev-ref HEAD`
	if [[ "$current_branch" != "production" ]]; then
		echo "please switch your branch to 'production' and update it"
		exit 1
	fi

	echo "update prod.json"
	cd ../aussie-provisioning/
	git pull --rebase
	cp prod.json ../aussie/config/prod.json
	cd -
fi

if [[ `git status -s --porcelain public/js` != "" || `git status -s --porcelain public/css` != "" ]]; then
	echo 'public/js or public/css has uncommited changes. Please commit or stash them before deployment.'
	exit 1
fi

pak -c get

gulp release --type production

go run scripts/gen_asset_paths.go

harp -s $env deploy

bin/clean_deploy_tmp.sh

harp -s $env log
