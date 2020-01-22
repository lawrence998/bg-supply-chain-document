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
      { 
        text: '组件库',
        items: [
          { 
            text: '公共组件', 
            items: [
              { text: '基本按钮用法', link: '/commonComponents/base/button.md' },
              { text: '树形下拉组件', link: '/commonComponents/base/treeSelect.md' },
              { text: 'cascader级联选择器', link: '/commonComponents/base/cascader.md' }
            ]
          }
        ]
      },
      { 
        text: 'vue脚手架',
        items: [
          { 
            text: '公共组件', 
            items: [
              { text: '介绍', link: '/vueCli/introduce/introduce.md' },
              { text: '目录结构', link: '/vueCli/introduce/directoryStructure.md' },
              { text: '安装', link: '/vueCli/installation/installation.md' },
              { text: '项目依赖', link: '/vueCli/projectDependence/projectDependence.md' }
            ]
          },
          {
            text: 'Vue-Typescript脚手架模板',
            items: [
              { text: '模板', link: '/vueCli/vueTypescriptCli/vueTypescriptCli.md' },
            ]
          }
        ] 
      },
      { 
        text: '开发规范',
        items: [
          { 
            text: 'HTLM篇', 
            items: [
              { text: 'HTLM篇', link: '/developSpecification/htmlSpecification/htmlSpecification.md' }
            ]
          },
          { 
            text: 'CSS篇',
            items: [
              { text: 'CSS篇', link: '/developSpecification/cssSpecification/cssSpecification.md' }
            ]
          },
          { 
            text: 'JS篇',
            items: [
              { text: 'JS篇', link: '/developSpecification/jsSpecification/jsSpecification.md' }
            ]
          },
          { 
            text: '框架篇',
            items: [
              { text: '框架篇', link: '/developSpecification/frameSpecification/frameSpecification.md' }
            ]
          },
          { 
            text: '部署篇',
            items: [
              { text: '部署篇', link: '/developSpecification/deploySpecification/deploySpecification.md' }
            ]
          }
        ] 
      },
      { text: '代码走查实例', link: '/exampleCodeCheck/' },
      { text: '公共方法', link: '/publicMethod/' },
      { 
        text: 'VueListView框架', 
        // link: '/vueListView/' 
        items: [
          { 
            text: 'VueListView基本使用', 
            items: [
              { text: '基本使用', link: '/vueListView/baseUse/baseUse.md' }
            ]
          },
          { 
            text: 'VueListView开发指南',
            items: [
              { text: 'Props 一览', link: '/vueListView/developerGuide/props.md' },
              { text: 'Prop: filterButtons', link: '/vueListView/developerGuide/prop-filter-buttons.md' },
              { text: 'Prop: filterFields', link: '/vueListView/developerGuide/prop-filter-fields.md' },
              { text: 'Prop: tableColumns', link: '/vueListView/developerGuide/prop-table-columns.md' },
              { text: 'Slots', link: '/vueListView/developerGuide/slots.md' },
              { text: 'Methods & Events', link: '/vueListView/developerGuide/methods-and-events.md' },
              { text: 'Listview Container', link: '/vueListView/developerGuide/listview-container.md' }
            ]
          },
          { 
            text: 'VueListView布局Demo',
            items: [
              { text: '完整布局一览', link: '/vueListView/demo/all.md' },
              { text: '指定高度', link: '/vueListView/demo/fixed-height.md' },
              { text: '自动高度', link: '/vueListView/demo/auto-height.md' },
              {
                text: '多表格容器 (Listview Container)',
                link: '/vueListView/demo/listview-container.md'
              }
            ]
          },
          { 
            text: 'VueListView常用实例',
            items: [
              { text: '常用操作按钮', link: '/vueListView/commonExample/filter-buttons.md' },
              {
                text: '自定义搜索组件',
                link: '/vueListView/commonExample/custom-filter-field.md'
              },
              {
                text: '提交前验证 / 初始提示',
                link: '/vueListView/commonExample/validate.md'
              },
              { text: '自定义布局', link: '/vueListView/commonExample/custom-view.md' },
              {
                text: '自定义请求方法',
                link: '/vueListView/commonExample/request-handler.md'
              }
            ]
          }
        ]
      },
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
            ['/vueListView/demo/all.md', '完整布局一览'],
            ['/vueListView/demo/fixed-height.md', '指定高度'],
            ['/vueListView/demo/auto-height.md', '自动高度'],
            ['/vueListView/demo/listview-container.md', '多表格容器 (Listview Container)'],
          ]
        },
        {
          title: 'VueListView常用实例',
          collapsable: true,
          children: [
            ['/vueListView/commonExample/filter-buttons.md', '常用操作按钮'],
            ['/vueListView/commonExample/custom-filter-field.md', '自定义搜索组件'],
            ['/vueListView/commonExample/validate.md', '提交前验证 / 初始提示'],
            ['/vueListView/commonExample/custom-view.md', '自定义布局'],
            ['/vueListView/commonExample/request-handler.md', '自定义请求方法'],
          ]
        },
      ]
    }
  }
}