<template>
  <div class="demo-treeSelect">
    <div>
        <bg-tree-select
        :options="options"
        v-model="value"
        :memoryName="'bg-tree-select'"
        ></bg-tree-select>
        <div>
            <el-button type="primary" @click="saveUsual">触发保存到常用选择</el-button>
        </div>
        <div>
            <span>输出的结果：</span>
            <span>{{value}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import {
  historyStorageEmit
} from 'bg-vue-components/lib/utils/history';
export default {
  name: 'treeSelectWrap',
  methods: {
    saveUsual() {
      historyStorageEmit();
    }
  },
  computed: {
    options() {
      const isEn = false;
      return [
        {
          id: 'p1',
          label: isEn ? 'p1' : '父1',
          showCheckbox: false,
          children: [
            {
              id: 'c1',
              label: isEn ? 'c1' : '子1'
            }
          ]
        },
        {
          id: 'p2',
          label: isEn ? 'p2' : '父2',
          children: [
            {
              id: 'c2',
              label: isEn ? 'c2' : '子2'
            }
          ]
        }
      ];
    }
  },

  data() {
    return {
      value: [],
    }
  }
}
</script>

<style lang="less" scoped>
.demo-treeSelect{
  width: 100%;
  text-align: center;
  div {
    margin: 10px;
  }
}
</style>

