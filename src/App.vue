<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    name: '',
    age: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}
</script>

<template>
    <el-card>
        <div slot="header" class="clearfix">
            <span>原生input测试</span>
        </div>
        <div v-focus-next.autoFocus>
            <div>
                <input placeholder="输入回车自动聚焦下一行"/>
            </div>
            <div><input/></div>
            <input/>
            <input/>
            <input/>
            <input/>
            <textarea  />
            <input/>
            <input/>
        </div>
    </el-card>

    <el-card style="margin-top: 20px;">
        <div slot="header" class="clearfix">
            <span>ElementPlus Form测试</span>
        </div>
        <el-form v-focus-next :model="form" label-width="120px">
            <el-form-item label="Activity name">
                <el-input v-model="form.name" id="name" placeholder="输入回车自动聚焦下一个非禁用的input"/>
            </el-form-item>
            <el-form-item label="Activity age">
                <el-input v-model="form.age" id="age" disabled />
            </el-form-item>
            <el-form-item label="Activity age">
                <el-input v-model="form.age" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="form.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>

            <el-form-item label="Instant delivery">
                <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="Activity age">
                <el-input v-model="form.age" placeholder="自动跳过radio和checkbox"/>
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="Online activities" name="type" />
                    <el-checkbox label="Promotion activities" name="type" />
                    <el-checkbox label="Offline activities" name="type" />
                    <el-checkbox label="Simple brand exposure" name="type" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="form.resource">
                    <el-radio label="Sponsor" />
                    <el-radio label="Venue" />
                </el-radio-group>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </el-card>

    <el-card style="margin-top: 20px;">
        <div slot="header" class="clearfix">
            <span>自定义支持focus next的元素，比如只自动选中class为focus-next的元素</span>
        </div>
        <div v-focus-next="'.focus-next'">
            <div class="focus-next">
                <input placeholder="class为focus-next"/>
            </div>
            <div>
                <input placeholder="class为空"/>
            </div>
            <div>
                <input placeholder="class为空"/>
            </div>
            <div class="focus-next">
                <input placeholder="class为focus-next" disabled/>
            </div>
            <input class="focus-next" placeholder="class为focus-next"/>
           <div class="focus-next">
               <textarea  placeholder="class为focus-next"/>
           </div>
            <input class="focus-next" placeholder="class为focus-next"/>
            <div class="focus-next">
                <input placeholder="class为focus-next"/>
                <input placeholder="class为focus-next"/>
            </div>
        </div>
    </el-card>

</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
