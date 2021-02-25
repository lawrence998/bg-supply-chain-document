# cascader级联选择器
---
可以使用下列命令安装ascader级联选择器组件：
``` bash
npm install bg-vue-components
```
<Common-Democode title="基本用法" description="cascader级联选择器组件">
  <cascader-cascader></cascader-cascader>
  <highlight-code slot="codeText" lang="vue">
    <template>
        <section>
            <div>
                在element的cascader基础上增加了常用选择的功能。 依赖element的cascader
            </div>
            <bg-cascader
            ref="cascader"
            :options="options"
            v-model="value"
            :memoryName="'bg-cascader'"
            :request-time="requestTime"
            ></bg-cascader>
            <el-button type="primary" size="mini" @click="requestTime ++">触发保存常用</el-button>
            <el-button type="primary" size="mini" @click="consoleValue">打印value</el-button>
            <el-button type="primary" size="mini" @click="consoleOptions">打印options</el-button>
        </section>
    </template>
    <script>
        const options = [
            {
                createUserId: '',
                modifyDate: '1563535608000',
                hasChildren: true,
                modifyUserId: '',
                remark: '',
                problemName: '售前咨询',
                modifyTimeStamp: '1563536126000',
                mailProblemLabelId: '0b002d26-a9d5-11e9-8dd7-b083feeab00d',
                dataTreeParentId: '',
                parentId: '',
                sortNumer: 1,
                dataTreePrimaryId: '0b002d26-a9d5-11e9-8dd7-b083feeab00d',
                mailAccountTypeId: 2,
                isDeleted: false,
                mailAftersaleIds: '',
                children: [
                    {
                        createUserId: '',
                        modifyDate: '1563536110000',
                        hasChildren: false,
                        modifyUserId: '',
                        remark: '',
                        problemName: '不能保存地址',
                        modifyTimeStamp: '1563536110000',
                        mailProblemLabelId: '3625e783-a9d6-11e9-8dd7-b083feeab00d',
                        dataTreeParentId: '0b002d26-a9d5-11e9-8dd7-b083feeab00d',
                        parentId: '0b002d26-a9d5-11e9-8dd7-b083feeab00d',
                        sortNumer: 1,
                        dataTreePrimaryId: '3625e783-a9d6-11e9-8dd7-b083feeab00d',
                        mailAccountTypeId: 2,
                        isDeleted: false,
                        mailAftersaleIds: '',
                        children: [],
                        deleteUserId: '',
                        treePath: '',
                        createDate: '1563536110000',
                        deleteDate: '-2208988800000'
                    }
                ],
                deleteUserId: '',
                treePath: '',
                createDate: '1563535608000',
                deleteDate: '-2208988800000'
            },
        ]
        export default {
            data() {
                return {
                    value: [],
                    options,
                    requestTime: 0
                }
            },
            methods: {
                consoleValue() {
                    console.log(this.value)
                },
                consoleOptions() {
                    const value = this.$refs['cascader'].optionsWithUsually;
                    console.log(value);
                }
            }
        }
    </script>
  </highlight-code>
</Common-Democode>