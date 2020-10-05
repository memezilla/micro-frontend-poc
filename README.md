# micro-frontend-poc

Micro-frontends POC with [single-spa](https://single-spa.js.org/), which managed using [lerna](https://lerna.js.org/).

The app is composed of four sub-apps:

1. A container app that serves as the main page container and coordinates the mounting and unmounting of the micro-frontend apps, runs on port 9000

2. A micro-frontend nav app, runs on port 9001

3. A micro-frontend catalog app, runs on port 9002

4. A micro-frontend checkout app, runs on port 9003

## install dependencies

```shell
yarn bootstrap
```

## run

```
yarn start
```
