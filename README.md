![generator-web-extension](assets/logo-repo.png)

[![npm package](https://badge.fury.io/js/generator-web-extension.svg)](https://www.npmjs.com/package/generator-web-extension)
[![build status](https://secure.travis-ci.org/webextension-toolbox/generator-web-extension.png?branch=master)](https://travis-ci.org/webextension-toolbox/generator-web-extension)
[![Build status](https://ci.appveyor.com/api/projects/status/ajr5bdyo5j15e6mf?svg=true)](https://ci.appveyor.com/project/webextension-toolbox/generator-web-extension)
[![dependencies](https://david-dm.org/webextension-toolbox/generator-web-extension/status.svg)](https://david-dm.org/webextension-toolbox/generator-web-extension) 
[![devDependencies](https://david-dm.org/webextension-toolbox/generator-web-extension/dev-status.svg)](https://david-dm.org/webextension-toolbox/generator-web-extension?type=dev) 
[![devDependencies](https://david-dm.org/webextension-toolbox/generator-web-extension/peer-status.svg)](https://david-dm.org/webextension-toolbox/generator-web-extension?type=peer) 
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-green.svg?style=flat-square)](https://github.com/feross/standard)
[![license](https://img.shields.io/npm/l/generator-web-extension.svg)](https://github.com/webextension-toolbox/generator-web-extension/blob/master/LICENSE) 

Advanced WebExtension generator that creates everything you need to get started with cross-browser extension/addon development. 

Under the hood it uses [webextension-toolbox](https://github.com/webextension-toolbox/webextension-toolbox) for compiling the extensions.

## Install

```shell
$ npm install -g yo generator-web-extension
```

## Getting Started

1. First make a new directory, and `cd` into it: `mkdir my-web-extension && cd $_`
2. Run: `yo web-extension`.

![GIF showing the demo](https://i.imgur.com/lqTK588.gif)

## Options

* `--skip-install`

  Skips the automatic execution of `npm` after
  scaffolding has finished.

## License

Copyright 2018 Henrik Wenz

This project is free software released under the MIT license.
