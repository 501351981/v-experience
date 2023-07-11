import {autoFocus, findNextNode} from "./utils.js";

function inserted (el, binding, vNode) {
    if(binding.modifiers.autoFocus){
        autoFocus(vNode.$el || vNode.elm, binding)
    }

    function keyDown(event){
        if(event.keyCode !== 13){
            return;
        }

        let targetNode = event.target;
        if(targetNode.tagName === 'TEXTAREA'){
            return;
        }

        let nextNode = findNextNode(vNode.$el || vNode.elm, targetNode, binding);
        if(!nextNode){
            return;
        }
        setTimeout(()=>{
            nextNode.focus();
        });
    }
    el.addEventListener('keydown', keyDown);
    el.__FOCUS_NEXT_KEYDOWN_HANDLER__ = keyDown;
}

function unbind (el, binding, vNode) {
    el.removeEventListener("keydown", el.__FOCUS_NEXT_KEYDOWN_HANDLER__);
}

export default {
    inserted,
    unbind
}
