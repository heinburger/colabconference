#!/bin/bash

echo Provisioning system...

echo Installing prereq packages...
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y python-software-properties
apt-get update
apt-get install -y apache2 vim

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install mongodb-10gen

rm -rf /var/www
ln -fs /vagrant/www /var/www

echo "The main site can be accessed through http://localhost:55555"
echo "mongo db: http://localhost:27017  (28017 admin)"

