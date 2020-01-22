# Vue-TypeScript-Template
> 一个基本的Vue+Typescript脚手架.

### 安装

Prerequisites: [Node.js](https://nodejs.org/en/) (>=4.x, 6.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g vue-cli
```
### 使用

```bash
vue init lawrence998/my-typescript-template <project-name>
```

例子:

``` bash
$ vue init lawrence998/my-typescript-template my-project
```

上面的命令从这里提取模板，提示输入一些信息，并在`./my project/`生成项目。

### Demo
> 我写了一个[vue typescript演示]（http://github.com/lawrence998/my-typescript-template）项目来练习，它记录了我如何配置它以及如何将vue.js与typescript一起使用

### 除此之外

#### vuex
> 在初始化时添加“vuex”选项，它将创建“src/store”文件夹，并已进行如下配置：

```
src
├──store
   ├──actions.ts
   ├──mutations.ts
   ├──getters.ts
   ├──types.ts
```

#### vue-class-component
> 默认情况下添加'vue-class-componet'，并且vue对它的完美支持，它将使您的代码更加简洁美观，您会喜欢的。

### 包括
- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), or in PhantomJS with Karma + Mocha + karma-webpack.
  - Supports ES2015+ in test files.
  - Easy mocking

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

