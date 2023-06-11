function findFirstAvailableInput(nodes){
    for(let i=0;i<nodes.length;i++){
        const input = nodes[i];
        if(input.tagName ==='INPUT'
            && !input.disabled
            && !['submit', 'reset', 'file', 'hidden', 'checkbox', 'radio'].includes(input.type)
        ){
            return input;
        }else if(input.tagName ==='TEXTAREA'
            && !input.disabled
        ){
            return input;
        }
    }
}

function findAllInputs(rootDom, selector){
    return [...rootDom.querySelectorAll(selector)].reduce(function(nodes, node) {
        if(['INPUT', 'TEXTAREA'].includes(node.tagName)) {
            nodes.push(node);
            return nodes;
        }
        let childNodes = node.querySelectorAll('input, textarea');
        if(childNodes.length){
            let childNode = findFirstAvailableInput(childNodes)
            if(childNode){
                nodes.push(childNode);
            }
            return nodes;
        }
        return nodes;
    },[]).filter(item=>{
        if(item.tagName ==='INPUT'
            && !item.disabled
            && !['submit', 'reset', 'file', 'hidden', 'checkbox', 'radio'].includes(item.type)
        ){
            return true;
        }else if(item.tagName ==='TEXTAREA'
            && !item.disabled
        ){
            return true;
        }
        return false;
    })
}

export function autoFocus(rootDom, binding){
    let selector = binding.value || 'input, textarea';
    let nodes = findAllInputs(rootDom, selector);
    if(nodes.length){
        setTimeout(()=>{
            nodes[0].focus()
        })
    }
}
export function findNextNode(rootDom, targetNode, binding){
    let selector = binding.value || 'input, textarea';
    let nodes = findAllInputs(rootDom, selector);
    let isByCompare = false;
    let index = nodes.findIndex((item,index) => {
        if(item === targetNode || item.contains(targetNode)){
            return true
        }
        if(targetNode.compareDocumentPosition(item) &  Node.DOCUMENT_POSITION_FOLLOWING){
            isByCompare = true;
            return true
        }
        return false
    });
    if(isByCompare){
        return nodes[index]
    }else{
        if(index === -1 || index == nodes.length - 1){
            return null;
        }
        return nodes[index + 1];
    }
}