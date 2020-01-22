# CSS篇
---

::: tip 提示
基本原则：高质量的还原UI设计稿，同时采用适合浏览器解析和编译的css规则
:::

1. 一个系统推荐使用一种函数式`css`语言（`stylus`）
2. 统一采用外链`css`样式，尽量减少或者避免使用`!important`和内敛样式
3. `css`命名`class`采用-隔开，`id`采用_隔开
4. 组件的样式要加入`scoped`属性或者在外层加入本组件的`id`，不能污染全局样式
5. 优先使用`css`动画代替`gif`和`canvas`、`js`
6. 采用模块式编写，传统`css`每个属性值后必须加分号并换行，属性冒号后空一格，便于阅读
7. `css`选择器原则上不能超过三层级的选择，每多一次层级就会多一次渲染开销
8. 减少层级选择避免样式冲突可以使用前缀的方式解决。（加上当前模块外层的`id`或`class`作为前缀）

```css
/**错误**/
.nav ul li a{
    font-size:14px;
    line-height:30px;
}
/**正确**/
.nav-link{
    font-size:14px;
    line-height;30px;
}
```

```html
<div class="nav">
    <ul>
        <li>
        <a class="nav-link" href=""></a>
        </li>
    </ul>
</div>
```
