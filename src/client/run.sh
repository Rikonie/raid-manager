if [ ! -d /var/www/config/ ]
  then mkdir -p /var/www/config/
fi
echo {\"API_URL\":\""$API_URL"\"} > /var/www/config/config.json
