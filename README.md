### hacker-next project

### how to set web app manifest generator icon url

icons URL

```
/static/icons/icon-512x512.png
```

.extension are file extension

Sizes = 512x512

Type = image/png

<b>Add Another</b>

URL = /static/icons/icon-192x192.png

Sizes = 912x192

Type = image/png

### Install Package for Service-Worker

```
npm i --save sw-precache-webpack-plugin
```

### Heroku Configuration

```
npm i -g heroku

heroku login
```

go to project directory

```
git init
```

add line in package.json

<b>"heroku-postbuild": "next build"</b>

then run command

```
git add .

git commit -m "heroku deployment"

heroku git:remote -a hackers-apps  // this is remote command provided by heroku

git push heroku master
```
