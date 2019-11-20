<template>
  <div class="demo-button">
    <div>
      <bg-button>默认按钮</bg-button>
      <bg-button type="primary">主要按钮</bg-button>
      <bg-button type="success">成功按钮</bg-button>
      <bg-button type="info">信息按钮</bg-button>
      <bg-button type="warning">警告按钮</bg-button>
      <bg-button type="danger">危险按钮</bg-button>
    </div>
  </div>
</template>

<script>
import bgButton from '../src/button'
export default {
  name: 'buttonWrap',
  components: {
    bgButton
  },

  data() {
    return {
      value: [],
    }
  }
}
</script>

<style lang="less" scoped>
.demo-button{
  width: 100%;
  text-align: center;
  div {
    margin: 10px 0;
  }
}
</style>

