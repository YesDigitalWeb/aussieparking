#!/usr/bin/env bash

set -e

go run db/migration/migration.go -f
go run db/seeds/seeds.go
