const path = require('path');

module.exports = {
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  title: '供应链前端技术架构', // 设置网站标题
  base: '/bg-supply-chain-document/', // 使用gh-pages功能时使用
  // base: '/scmfe/', 
  repo: 'https://github.com/lawrence998/bg-supply-chain-document', // 添加 github 链接
  description: 'Just for code', //描述
  // dest: './dist',   // 设置输出目录
  port: 2333, //端口
  configureWebpack: (config, isServer) => {
    return {
      resolve: {
        alias: {
          '@': path.join(__dirname, '../../src')
        }
      }
    }
  },
  markdown: {
    lineNumbers: true, // 代码块显示行号
    config: md => {
      md.use(require('markdown-it-plantuml'))
    }
  },
  themeConfig: { //主题配置
    // 假定 GitHub。也可以是一个完整的 GitLab 网址
    // repo: 'vuejs/vuepress',
    
    // 可选，默认为 master
    // docsBranch: 'master',

    // 默认为 true，设置为 false 来禁用
    // editLinks: true

    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    lastUpdated: '上次更新',
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件库', link: '/commonComponents/' },
      { text: 'vue脚手架', link: '/vueCli/' },
      { text: '开发规范', link: '/developSpecification/' },
      { text: '代码走查实例', link: '/exampleCodeCheck/' },
      { text: '公共方法', link: '/publicMethod/' },
      { text: 'VueListView框架', link: '/vueListView/' },
      { text: '知识库', link: '/knowledge/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          // { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
          // { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
          { text: '文档github', link: 'https://github.com/lawrence998/bg-supply-chain-document' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/commonComponents/': [
        {
          title: '可视化组件',
          collapsable: true,
          children: [
            'base/button',
            'base/treeSelect',
            'base/cascader'
          ]
        },
        {
          title: '布局类组件',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '工具类组件',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '方法类函数',
          collapsable: true,
          children: [
          ]
        }
      ],

      '/knowledge/': [
        {
          title: 'CSS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'JS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'node知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'vue知识库',
          collapsable: false,
          children: [
          ]
        }
      ],

      '/vueCli/': [
        {
          title: '介绍',
          collapsable: true,
          children: [
            'introduce/introduce',
            'introduce/directoryStructure',
          ]
        },
        '/vueCli/installation/installation',
        '/vueCli/projectDependence/projectDependence',
        {
          title: 'Vue-Typescript脚手架模板',
          collapsable: true,
          children: [
            'vueTypescriptCli/vueTypescriptCli',
          ]
        }
      ],

      '/developSpecification/': [
        '/developSpecification/htmlSpecification/htmlSpecification',
        '/developSpecification/cssSpecification/cssSpecification',
        '/developSpecification/jsSpecification/jsSpecification',
        '/developSpecification/frameSpecification/frameSpecification',
        '/developSpecification/deploySpecification/deploySpecification'
      ],

      '/vueListView/': [
        {
          title: 'VueListView基本使用',
          collapsable: true,
          children: [
            'baseUse/baseUse'
          ]
        },
        {
          title: 'VueListView开发指南',
          collapsable: true,
          children: [
            'developerGuide/props',
            'developerGuide/prop-filter-buttons',
            'developerGuide/prop-filter-fields',
            'developerGuide/prop-table-columns',
            'developerGuide/slots',
            'developerGuide/methods-and-events',
            'developerGuide/listview-container',
          ]
        },
        {
          title: 'VueListView布局Demo',
          collapsable: true,
          children: [
            'demo/all',
            'demo/fixed-height',
            'demo/auto-height',
            'demo/listview-container'
          ]
        },
        {
          title: 'VueListView常用实例',
          collapsable: true,
          children: [
            'commonExample/filter-buttons',
            'commonExample/custom-filter-field',
            'commonExample/validate',
            'commonExample/custom-view',
            'commonExample/request-handler'
          ]
        },
      ]
    }
  }
}