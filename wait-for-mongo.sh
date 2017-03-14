#!/bin/sh
while ! curl http://$DB_PORT_27017_TCP_ADDR:$DB_PORT_27017_TCP_PORT/
do
  echo "$(date) - still trying"
  sleep 1
done
echo "$(date) - connected successfully"
