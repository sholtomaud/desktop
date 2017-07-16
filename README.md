## Stencila Desktop

[![Experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)
[![Build status](https://travis-ci.org/stencila/desktop.svg?branch=master)](https://travis-ci.org/stencila/desktop)
[![Dependency status](https://david-dm.org/stencila/desktop.svg)](https://david-dm.org/stencila/desktop)
[![Community](https://img.shields.io/badge/join-community-green.svg)](https://community.stenci.la)
[![Chat](https://badges.gitter.im/stencila/stencila.svg)](https://gitter.im/stencila/stencila)

### Install

Download the [latest release](https://github.com/stencila/desktop/releases) for your operating system.

### Use

See the guide documents installed with the application.

### Discuss

We :heart: feedback. Create a [new issue](https://github.com/stencila/desktop/issues/new), add to [existing issues](https://github.com/stencila/desktop/issues) or [chat](https://gitter.im/stencila/stencila) with members of the community.

### Develop

Get started by running the app in development mode:

```bash
$ git clone https://github.com/stencila/desktop.git
$ cd desktop
$ npm install
$ npm start
```

Package the application:

```bash
$ npm run release
```

Stencila Desktop is built on top of [`stencila/node`](https://github.com/stencila/node) which in turn is built on top of [`stencila/stencila`](https://github.com/stencila/stencila). Sometimes during development, particularly just prior to a release,  you'll want to work on all three together. To propagate changes from `stencila/stencila` through to the desktop...

```bash
# In stencila/stencila build the JavaScript UI bundle
npm run build
```

```bash
# In stencila/node copy the JavaScript UI bundle to static/stencila
npm link stencila
npm run postinstall
```

```bash
# In stencila/desktop copy the JavaScript UI bundle to bundle/lib/stencila
npm link stencila-node
npm run build
```

Remember to do a `npm unlink stencila-node` before doing `npm run release`. 

Although this setup is somewhat convoluted, having a linear dependency simplifies release management. Furthermore, this is only necessary when you really want to development test the UI in the desktop. It can be avoided by mimicking the Desktop environment in the `stencila/stencila` development setup with environment variables e.g.

```bash
STENCILA_PEERS="http://127.0.0.1:2000 http://127.0.0.1:2100" STENCILA_DISCOVER=30 npm start
```

