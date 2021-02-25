# 介绍

## [vue-preset](https://github.com/lawrence998/vue-preset)

基于 vue-cli3 搭建的前端模板

## 特性

- 模板提供js或ts版本，pc或moblie版本，ui框架(element-ui,vant,iview,hui,ant), vueListView框架(表格列表页)等个性化选择。

- CSS 预编译语言：[less](http://lesscss.org/)

- Ajax: [axios](https://github.com/axios/axios)，做了一定的封装(取消重复请求，增加mock机制，增加缓存接口功能)，详见 `src/services/request.js`

- 路由自动注入: [@liwb/vue-router-invoke-webpack-plugin](https://github.com/Qymh/vue-router-invoke-webpack-plugin), 根据文件格式自动生成vue-router的路由

- SVG 雪碧图：采用 `webpack` 插件 `svg-sprite-loader`,及 `svg` 精简压缩工具 `svgo`

- 移动 web 的适配方案：引入了 `postcss-pxtorem` 及 `lib-flexible`，可以自由地用 px 去开发

- 常用的 js 工具类： [cloud-utils](https://lawrence998.github.io/cloud-utils/)

- 常用的 Less 的 mixins 集合：[magicless](https://github.com/lawrence998/magicless)

- ESLint+prettier代码检查工具：统一代码风格规则，减少语法错误，提高代码质量。

## 目录介绍

```
.
├── build              # 生成压缩包
├── public             # 静态资源，不需要 webpack 处理
└── src
    ├── assets
    │   ├── fonts      # 字体文件
    │   ├── img
    │   ├── js         # 不经过 npm 或 yarn 下载的第三方依赖包
    │   └── less       # reset 样式，及定义的常量文件等
    ├── components
    │   ├── SendCode   # tree shaking 组件
    │   └── global     # 全局注册组件
    │       └── SvgIcon
    ├── filters        # 全局过滤器
    ├── icons          # svg 文件
    │   └── svg
    ├── router         # 路由及拦截器
    ├── services       # 统一的服务接口请求处理
    └── views
        └── hello

```

## 快速开始

```bash
# 安装 vue-cli 3.0
npm install -g @vue/cli

# 根据远程 preset 创建项目
vue create --preset lawrence998/vue-preset my-project
# or
vue create --preset direct:https://github.com/lawrence998/vue-preset my-project --clone

# 本地预览
cd my-project && yarn run serve

```

浏览器访问 http://localhost:3000

## 其他
```
# --svgo svg精简压缩
yarn run svgo

# --analyz 基于 webpack-bundle-analyzer 插件分析打包的文件构成及大小(vue ui 界面上的分析不习惯)
yarn run analyz

# --report 生成静态报告文件
yarn run report

```

## 相关链接

- [vue-cli3官方文档](https://cli.vuejs.org/zh/)
- [vue-cli 3.0 配置](https://blog.csdn.net/qq_35844177/article/details/81099492)
- [chainWebpack](https://github.com/neutrinojs/webpack-chain#getting-started)
- [[Vue CLI 3] 配置 webpack-bundle-analyzer 插件](https://segmentfault.com/a/1190000016247872)
## License

[MIT](https://github.com/lawrence998/vue-cli3-template/blob/master/LICENSE)
