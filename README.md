# v-focus-next
## 简介

v-focus-next是一个Vue指令，使用该指令后，在表单的某个元素中输入回车符，可以自动聚焦到下一个表单元素，避免了用户通过鼠标来回选中表单元素，大大提升了表单填写的效率和用户体验。

[《演示效果》](https://501351981.github.io/v-focus-next/dist/)

v-focus-next的使用非常简单。

只需要为某个Dom或Vue组件（如div、form、ElForm等）绑定v-focus-next指令，则该Dom下的所有input/textarea自动支持回车聚焦功能，无需任何其他配置。

支持以下特性：

- 默认会将所有input/textarea加入回车聚焦功能，也可通过指定className等方式，将部分表单元素支持回车聚焦。
- 支持首个表单元素自动聚焦
- 支持自动滚动到下个表单元素 (开发中)
- 支持任意普通Dom元素和Vue组件
- 自动过滤掉disable的元素及type为hidden、radio、checkbox、file、submit、reset的元素
- 支持vue2/3

## 使用

### 安装

```shell
npm install v-focus-next
```

### 示例1
只需为某个父元素增加v-focus-next指令，则其中所有表单元素就拥有了回车聚焦功能。
```html
 <div v-focus-next>
    <input placeholder="输入回车自动聚焦下一行"/>
    <input/>
    <input/>
    <input/>
    <input/>
    <textarea  />
</div>
```

Vue组件也是一样的，如为el-form添加v-focus-next指令。
```html
<el-form v-focus-next >
    <el-form-item label="名称">
        <el-input v-model="form.name" id="name" />
    </el-form-item>
    <el-form-item label="年龄">
        <el-input v-model="form.age" id="age" disabled />
    </el-form-item>
 </el-form>
```

### 示例2：指定参与回车聚焦的元素

或许你不想所有表单元素都参与回车聚焦，比如只想让所有设置了class为'test'的元素参与回车聚焦，只需要设置 v-focus-next="'.test'"，可设为querySelectorAll支持的参数形式。

```html
<div v-focus-next="'.test'">
    <input class="test"/>
    <input />
    <input class="test"/>
</div>
```

### 示例3：自动聚焦首个元素
只需设置v-focus-next.autoFocus即可。
```html
<div v-focus-next.autoFocus>
    <input />  //自动聚焦
    <input />
    <input />
</div>
```

## 赞助和微信交流

**_如果该项目确实帮助到了您_**，欢迎赞助，以鼓励我将更多的休息时间，投入到该项目的优化中，也欢迎赞助后添加微信交流：\_hit757_

<img src="https://501351981.github.io/vue-office/examples/dist/static/wx.png" alt="赞助二维码" width="260"/>

### 恳请各位大佬不吝点赞，开源不易，感谢支持~~