apt-get -y install apache2

# sudo rsync -avP ~/act/ /var/www/
# sudo rm -rf /var/www/
ln -s /home/act/ /var/www

sudo cp Game/Game.com.conf /etc/apache2/sites-available/
sudo cp Cat/Cohete.com.conf /etc/apache2/sites-available/
sudo cp Game/ /var/www/Game/ -R
sudo cp Cat/ /var/www/Cohete/ -R

