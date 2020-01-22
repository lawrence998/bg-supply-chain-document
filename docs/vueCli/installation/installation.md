# 安装

::: tip Node 版本要求
Vue CLI 需要 [Node.js](https://nodejs.org/) 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 [nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。
:::

可以使用下列命令安装供应链部门的Vue脚手架：

``` bash
通过npm安装vue
npm install vue 

安装vue 官方脚手架
npm install -g vue-cli 

通过自定义的脚手架初始化项目
vue init qyc437970808/webpack#qyc437970808 my-project 

切换到项目的目录位置
cd my-project

安装项目运行所需要的依赖
npm install 

即可启动项目，默认监听8080端口
npm run dev 
```

安装之后，你就可以在命令行中访问 `vue` 命令。你可以通过简单运行 `vue`，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。

你还可以用这个命令来检查其版本是否正确：

```bash
vue --version
```