import focusNext3 from './focus-next3.js';
import focusNext2 from "./focus-next2.js";

export const vFocusNext2 = focusNext2;
export const vFocusNext3 = focusNext3;
export default {
    install: function (Vue){
        let version =  Vue.version;
        if(version.startsWith('3')) {
            Vue.directive('focus-next', focusNext3);
        }else if(version.startsWith('2')){
            Vue.directive('focus-next', focusNext2);
        }else{
            console.error('v-focus-next只支持vue2/3≈')
        }
    }
}