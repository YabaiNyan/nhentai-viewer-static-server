# nhentai-viewer-static-server
nhentai viewer static host

Installation
=====
1) Clone this repository
2) Open a console in the downloaded folder and run ```npm install```
3) Create a ```.env``` file inside the folder with ```PORT=(port)``` inside, replacing (port) your desired port (default port is 80).
4) To start, run ```node nvss.js``` or ```npm test```

Usage
=====
Navigate to `(server):(port)/(nhentai book id)` on a browser of your choice

Note on setup
=====
You can have the server setup up so that you directly change `nhentai.net` to your server/domain name by using nginx to forward `/g/` to nvss.js

Example nginx setup (completely optional)
=====
```
server {
    root /var/www/html

    location /g/ {
        proxy_set_header X-Real-IP  $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Host $host;
        proxy_pass http://localhost:8080/;
    }

    location / {
        try_files $uri $uri/ =404;
    }

    listen 80;
}
```