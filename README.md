sudo nano /etc/hosts
	192.168.33.10   www.game.com
	192.168.33.10   www.cohete.com

sudo a2dissite default
sudo a2ensite Game.com.conf
sudo a2ensite Cohete.com.conf

sudo service apache2 reload
