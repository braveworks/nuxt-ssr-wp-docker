# Nuxt SSR WordPress Docker

Docker Compose with Nuxt SSR and WordPress REST API

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

## docker

```bash
# start wordpress and db
docker-compose up -d

# wp-cli (enter cli container)
docker-compose run --rm cli bash

```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Thanks

<https://qiita.com/kitsuki00/items/ed51dbb254bcc6c94fbd>
