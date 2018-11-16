<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">cs-for-noobs</h1>

  <p>CS for noobs</p>
</div>

<hr />

[![Version][version-badge]][version-url]
[![Built with lit-element][built-with-lit-element-badge]][built-with-lit-element-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

[![Build Status][travis-badge]][travis-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
<!-- [![codecov][codecov-badge]][codecov-url] -->
<!-- [![Coverage Status][coveralls-badge]][coveralls-url] -->

[![codebeat badge][codebeat-badge]][codebeat-url]
[![Codacy Badge][codacy-badge]][codacy-url]
[![Code of Conduct][coc-badge]][coc-url]

> Better element for the web

## Table of contents

- [Table of contents](#table-of-contents)
- [Pre-requisites](#pre-requisites)
- [Installation](#installation)
- [Usage](#usage)
  - [HTML (w/ native ES modules)](#html-w-native-es-modules)
  - [JS/ TS file (w/ native ES modules)](#js-ts-file-w-native-es-modules)
- [License](#license)

## Pre-requisites

- [Node.js][nodejs-url] >= 10.13.0
- [NPM][npm-url] >= 6.4.1 ([NPM][npm-url] comes with [Node.js][nodejs-url], no separate installation is required.)
- (Optional for non-[VS Code][vscode-url] users) [Syntax Highlighting for lit-html in VS Code][vscode-lit-html-url]

## Installation

```sh
# Install via NPM
$ npm install cs-for-noobs
```

## Usage

### HTML (w/ native ES modules)

```html
<!-- For the sake of brevity, the HTML below is just for reference -->
<!doctype html>
<html>
  <head>
    <!-- Native ES modules -->
    <script type="module" src="/path/to/my-element.js"></script>
  </head>

  <body>
    <!-- Element declaration -->
    <my-element></my-element>
  </body>
</html>
```

### JS/ TS file (w/ native ES modules)

```ts
import { html, LitElement } from '@polymer/lit-element';
import 'cs-for-noobs.js';

class MainApp extends LitElement {
  protected render() {
    return html`
      <my-element></my-element>
    `;
  }
}
```

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng (motss)

<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[vscode-url]: https://code.visualstudio.com/
[vscode-lit-html-url]: https://github.com/mjbvz/vscode-lit-html

<!-- MDN -->
[array-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[regexp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[set-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

<!-- Badges -->
[version-badge]: https://flat.badgen.net/npm/v/cs-for-noobs
[built-with-lit-element-badge]: https://flat.badgen.net/badge/built%20with%20lit-element/v0.6.2/orange?icon=npm
[mit-license-badge]: https://flat.badgen.net/npm/license/cs-for-noobs

[downloads-badge]: https://flat.badgen.net/npm/dm/cs-for-noobs
[total-downloads-badge]: https://flat.badgen.net/npm/dt/cs-for-noobs?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/cs-for-noobs
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/cs-for-noobs

[travis-badge]: https://flat.badgen.net/travis/motss/cs-for-noobs
<!-- [circleci-badge]: https://flat.badgen.net/circleci/github/motss/cs-for-noobs -->
[daviddm-badge]: https://flat.badgen.net/david/dep/motss/cs-for-noobs
<!-- [codecov-badge]: https://flat.badgen.net/codecov/c/github/motss/cs-for-noobs?label=codecov -->
<!-- [coveralls-badge]: https://flat.badgen.net/coveralls/c/github/motss/cs-for-noobs?label=coveralls -->

[codebeat-badge]: https://codebeat.co/badges/123
[codacy-badge]: https://api.codacy.com/project/badge/Grade/123
[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[version-url]: https://www.npmjs.com/package/cs-for-noobs
[built-with-lit-element-url]: https://github.com/Polymer/lit-element
[mit-license-url]: https://github.com/motss/cs-for-noobs/blob/master/LICENSE

[downloads-url]: https://www.npmtrends.com/cs-for-noobs
[packagephobia-url]: https://packagephobia.now.sh/result?p=cs-for-noobs
[bundlephobia-url]: https://bundlephobia.com/result?p=cs-for-noobs

[travis-url]: https://travis-ci.org/motss/cs-for-noobs
<!-- [circleci-url]: https://circleci.com/gh/motss/cs-for-noobs/tree/master -->
[daviddm-url]: https://david-dm.org/motss/cs-for-noobs
<!-- [codecov-url]: https://codecov.io/gh/motss/cs-for-noobs -->
<!-- [coveralls-url]: https://coveralls.io/github/motss/cs-for-noobs?branch=master -->

[codebeat-url]: https://codebeat.co/projects/github-com-motss-cs-for-noobs-master
[codacy-url]: https://www.codacy.com/app/motss/cs-for-noobs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/cs-for-noobs&amp;utm_campaign=Badge_Grade
[coc-url]: https://github.com/motss/cs-for-noobs/blob/master/CODE_OF_CONDUCT.md
