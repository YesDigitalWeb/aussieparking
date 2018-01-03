#!/usr/bin/env bash

set -e

export WEB_ENV=test

echo 'git clone qor-enterprise'
mkdir -p $GOPATH/src/github.com/theplant
cd $GOPATH/src/github.com/theplant
git clone git@github.com:theplant/qor-enterprise.git
cd -

echo 'get pak'
go get -u github.com/theplant/pak
echo 'pak get'
pak get github.com/qor/qor
pak get

cp config/semaphore-ci.json config/test.json
bin/init_db.sh
bin/test.sh
