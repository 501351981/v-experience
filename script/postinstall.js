function loadModule(name) {
    try {
        return require(name);
    } catch (e) {
        return undefined;
    }
}

let Vue = loadModule('vue');
console.log("vue->", Vue)
if(Vue && Vue.version){
    const path = require('path');
    const spawnSync = require('child_process').spawnSync;
    const targetPath = path.resolve(__dirname, '../../index.d.ts')
    if(Vue.version.startsWith('2.')) {
        console.log("vue->", 2)
        spawnSync('mv',[path.resolve(__dirname, '../types/v-focus-next.d.ts2'), targetPath]);
    } else if (Vue.version.startsWith('3.')) {
        console.log("vue->", 3)
        spawnSync('mv',[path.resolve(__dirname, '../types/v-focus-next.d.ts3'), targetPath]);
    }
}