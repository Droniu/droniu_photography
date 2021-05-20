# bash script for updating droniu photography
# git pull should be used before updating
cd frontend
npm run build
cd ..
./manage.py collectstatic
sudo systemctl restart nginx gunicorn

