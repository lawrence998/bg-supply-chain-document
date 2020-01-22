---
pageClass: demo-page-class
---

# 自定义布局
<!-- markdownlint-disable MD033 -->
<client-only>
<demo-box codesandbox="https://codesandbox.io/s/0x133mry9p?module=%2Fsrc%2FApp.vue&view=preview">
<div slot="demo">

  <demo-example-custom-view />

</div>

<div slot="code">

<<< docs/.vuepress/components/demo/example/custom-view.vue

</div>

</demo-box>
</client-only>
<!-- markdownlint-enable MD033 -->

<style>
.theme-default-content:not(.custom) > h1:first-child {
    margin-top: -0.1rem;
    font-size: 22px;
    text-align: center;
}
</style>