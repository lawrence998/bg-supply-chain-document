module.exports = {
  // head: [
  //   ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  // ],
  title: '供应链前端技术架构', // 设置网站标题
  // base: '/bg-supply-chain-document/', // 使用gh-pages功能时使用
  base: '/scmfe/', 
  repo: 'https://github.com/lawrence998/bg-supply-chain-document', // 添加 github 链接
  description: 'Just for code', //描述
  dest: './dist',   // 设置输出目录
  port: 2333, //端口
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件库', link: '/commonComponents/' },
      { text: 'vue脚手架', link: '/vueCli/' },
      { text: '开发规范', link: '/developSpecification/' },
      { text: '代码走查实例', link: '/exampleCodeCheck/' },
      { text: '公共方法', link: '/publicMethod/' },
      { text: '前端系统', link: '/frontEndSystem/' },
      { text: '知识库', link: '/knowledge/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/commonComponents/': [
        {
          title: '布局类组件',
          collapsable: true,
          children: [
            'base/test1',
            'base/test2',
            'base/test3',
            'base/test4',
          ]
        },
        {
          title: '可视化组件',
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
        '/vueCli/projectDependence/projectDependence'
      ]
    }
  }
}