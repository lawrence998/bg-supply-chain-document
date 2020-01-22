# HTML篇
---

::: tip 提示
基本原则：结构、样式、行为分离，所有的操作都旨在便于浏览器解析和维护
:::

## 标签

- 自闭和标签必须闭合(`div` `span`)，无需闭合标签不许闭合(`img` `input`)，可选的闭合标签必须闭合（`</li>`）
- 统一使用语义化标签，避免全页面大量`div`标签，易于SEO检索和浏览器渲染
- 缩进风格每个系统必须统一为4个
- 标签嵌套必须严格按照标签自身规范，如p标签内不允许嵌套p标签，		详情大家可以参考HTML5的嵌套规则

## 兼容模式

- 优先使用最新版本的IE和Chrome内核
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

## HTML头部
保留使用利于SEO的头部（以下为推荐的html头部）
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>title</title>
        <!-- 针对pc端视图方式 -->
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <!-- 针对移动端设备视图方式 -->
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
        <meta name="keywords" content="my keywords">
        <meta name="description" content="my description">
        <meta name="author" content="author****">
    </head>
    <body〉
        <div id="app"></div>
    </body>
</html>
```