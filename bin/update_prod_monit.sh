#!/usr/bin/env bash

set -e

scp -r -P 9822 config/system/monit/ app@54.79.80.25:/home/app/
ssh -p 9822 app@54.79.80.25 -- monit -c /home/app/monit/monitrc reload
