# nhentai-viewer-static-server
nhentai viewer static host

Installation
=====
1) Clone this repository
2) Open a console in the downloaded folder and run ```npm install```
3) Create a ```.env``` file inside the folder with ```PORT=(port)``` inside, replacing (port) your desired port (default port is 80).
4) To start, run ```node nvss.js``` or ```npm test```

Note on setup
=====
The assumed setup is a nginx redirect setup; with /nh/ pointing to root of (nhentai-json-http-server)[https://github.com/YabaiNyan/nhentai-json-http-server] and /g/ pointing to root of (nhentai-viewer-static-server)[https://github.com/YabaiNyan/nhentai-viewer-static-server]

Example nginx setup
=====
```
server {
    root /var/www/html

    location /nh/ {
        proxy_set_header X-Real-IP  $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Host $host;
        proxy_pass http://localhost:8080/;
    }

    location /g/ {
        proxy_set_header X-Real-IP  $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Host $host;
        proxy_pass http://localhost:8181/;
    }

    location / {
        try_files $uri $uri/ =404;
    }

    listen 80;
}
```