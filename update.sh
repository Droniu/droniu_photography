# bash script for updating droniu photography
# git pull should be used before updating
cd frontend
npm run build
cd ..
source env/bin/activate
./manage.py collectstatic
deactivate
sudo systemctl restart nginx gunicorn

