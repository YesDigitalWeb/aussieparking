#!/usr/bin/env bash

ssh app@54.66.241.177 -p 56222 -- 'mysqldump -u root aussie_parking > devdb.sql'
scp -P 56222 app@54.66.241.177:devdb.sql tmp/devdb.sql
mysql -u root aussie_parking < devdb.sql
