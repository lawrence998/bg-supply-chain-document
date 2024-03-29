# Vue Listview 基本使用

Vue Listview 是一个基于 [Vue.js](https://cn.vuejs.org/) 和 [Element-UI](http://element.eleme.io/) ，可用于生成列表类的页面布局组件。

界面预览：

![预览](./baseUse/preview.png)

默认为表格类列表页，也可通过 [Slot](./developerGuide/slots.md) 实现自定义列表布局。

## 安装

```bash
yarn add @lawrence_ch/vue-listview element-ui

# OR

npm i -S @lawrence_ch/vue-listview element-ui
```

**Element-UI 作为 peerDependencies 需要同步安装。**

## 使用

### 全局注册

可以传入配置对象，用于全局配置 listview 。一般可用于项目接口与默认结构不同的场景，通过全局配置可不用在每个页面内重复写诸如 `validateResponse` 等“项目内通用”的配置。

支持全局配置：

- `validateResponse`
- `resolveResponseErrorMessage`
- `transformRequestData`
- `transformResponseData`
- `contentDataMap`

```js
// main.js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Listview from '@lawrence_ch/vue-listview'

Vue.use(ElementUI)
Vue.use(Listview)
/*
Vue.use(Listview, {
  validateResponse: response => response.different_success_status,
  resolveResponseErrorMessage: () => 'global config error',
  transformRequestData: requestData => {
    requestData.addon = 'requestAddon'
    return requestData
  },
  transformResponseData: response => {
    response.addon = 'responseAddon'
    return response
  },
  contentDataMap: {
    addon: 'addon',
    items: 'result.items',
    total: 'result.total_count'
  }
})
*/
```

### 局部注册

```vue
<template>
  <listview />
</template>

<script>
// import Vue from 'vue'
import Listview from '@lawrence_ch/vue-listview'

/*
Vue.prototype.$LISTVIEW = {
  contentDataMap: {
    addon: 'addon',
    items: 'result.items',
    total: 'result.total_count'
  },
  // ...
}
*/

export default {
  components: {
    Listview
  }
}
</script>
```

### UMD

演示： [jsfiddle](https://jsfiddle.net/laomao800/92Lvg1rn/4/)

```html
<div id="app">
  <listview />
</div>

<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/@laomao800/vue-listview/dist/listview.umd.min.js"></script>
<script>
new Vue().$mount('#app')
</script>
```

## 基本配置

- 搜索栏
  - 操作按钮 [《Prop: filterButtons》](./developerGuide/prop-filter-buttons.md)
  - 搜索字段 [《Prop: filterFields》](./developerGuide/prop-filter-fields.md)
- 表格布局 [《Prop: tableColumns》](./developerGuide/prop-table-columns.md)
- 自定义布局 [《Slot》](./developerGuide/slots.md)

## `/dist` 文件说明

由于 Listview 内部所有基础视图组件都来自 [Element-UI](http://element.eleme.io/) ，因此打包文件分别有两个版本，以下为 `dist` 目录下文件的对比说明：

- `listview-component.common.js`

  **默认文件**，只包含 listview 自身功能

- `listview-component.umd.js`

  同上的 UMD 版本

- `listview-component.umd.min.js`

  同上的 UMD 压缩版本

- `listview.common.js`

  包含 listview 功能和 Element-UI + css 完整库

- `listview.umd.js`

  同上的 UMD 版本

- `listview.umd.min.js`

  同上的 UMD 压缩版本
