Scholartree
===========
A web-based research tool, a visual mapping companion for your Wikipedia wanderings

[![Scholartree screenshot](http://i.imgur.com/16H2cSY.png)](https://scholartree.link/)

## Installation

**Before you start&mdash;** install `mongo`, `redis`, `node`, `gulp`, and `bower`

Fork & clone both the main repo and the env repo (these are designed to live as sibling directories)
- Main repo: https://github.com/scholartree/scholartree
- Env repo: https://github.com/scholartree/scholartree-env

In the main repo, run:
```
$ npm install
```
(which should also trigger `bower install`)

## Commands

### Building client JS & CSS

Build once
```
$ gulp build
```

Or, build & rebuild on change
```
$ gulp watch
```

### Starting node server

Start once
```
$ node server/server.js
```

Or, start & restart on change
```
$ nodemon server/server.js
```

