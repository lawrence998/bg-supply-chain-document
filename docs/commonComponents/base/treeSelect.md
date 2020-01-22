# 树形下拉组件
---
可以使用下列命令安装供应链部门的树形下拉组件：
``` bash
npm install bg-vue-components
```
<Common-Democode title="基本用法" description="树形下拉组件">
  <!-- <button-button></button-button> -->
  <treeSelect-treeSelect></treeSelect-treeSelect>
  <highlight-code slot="codeText" lang="vue">
    <template>
        <div class="demo-treeSelect">
            <div>
                <bg-tree-select
                    :options="options"
                    v-model="value"
                    :memoryName="'bg-tree-select'"
                ></bg-tree-select>
            </div>
            <div>
                <el-button type="primary" @click="saveUsual">触发保存到常用选择</el-button>
            </div>
            <div>
                <span>输出的结果：</span>
                <span></span>
            </div>
        </div>
    </template>
    <script>
        import {
            historyStorageEmit
        } from 'bg-vue-components/lib/utils/history';
        export default {
            name: 'treeSelectWrap',
            data() {
                return {
                    value: []
                };
            }
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
            }
        }
    </script>
  </highlight-code>
</Common-Democode>