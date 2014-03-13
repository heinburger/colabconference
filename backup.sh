#!/bin/bash
#crontab -e  -> * */1 * * * bash /vagrant/backup.sh

mongodump -d rsvpdb
rsync -avh /var/lib/mongodb/dump/rsvpdb -e "ssh -p 4242 -i /vagrant/micha_server_key" hein@lor4x.no-ip.org:~/mongo_backup