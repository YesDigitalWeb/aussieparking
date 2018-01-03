check process aussie-parking with pidfile /home/app/harp/aussie-parking/app.pid
  start program = "/bin/bash -c 'HOME=/home/app /home/app/harp/aussie-parking/restart.sh'"
  stop program = "/bin/sh -c 'pkill -c -f aussie-parking; exit0;'"
  if failed host 127.0.0.1 port 7000 then start
  if 5 restarts within 5 cycles then timeout
