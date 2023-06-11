import {autoFocus, findNextNode} from "./utils.js";

function mounted (el, binding, vNode) {
    if(binding.modifiers.autoFocus){
        autoFocus(vNode.el, binding)
    }
    function keyDown(event){
        if(event.keyCode !== 13){
            return;
        }

        let targetNode = event.target;

        let nextNode = findNextNode(vNode.el, targetNode, binding);
        if(!nextNode){
            return;
        }

        // 延迟操作是避免当一个input元素后面是textarea时，在input里面输入回车，如果直接将textarea聚焦
        // 则会在textarea中产生一个回车空行
        setTimeout(()=>{
            nextNode.focus();
        });
    }
    el.addEventListener('keydown', keyDown);
    el.__FOCUS_NEXT_KEYDOWN_HANDLER__ = keyDown;
}

function beforeUnmount (el, binding, vNode) {
    el.removeEventListener("keydown", el.__FOCUS_NEXT_KEYDOWN_HANDLER__);
}

export default {
    mounted,
    beforeUnmount
}
