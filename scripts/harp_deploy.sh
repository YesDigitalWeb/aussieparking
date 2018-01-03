set -e

{{.SyncFiles}}

{{.SaveRelease}}

{{if eq .Server.Set "prod"}}
/usr/bin/monit -c /home/app/monit/monitrc restart aussie-parking
{{else}}
{{.RestartServer}}
{{end}}
