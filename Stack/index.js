class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackUsingLinkedList {
    constructor(){
        this.top = null;
    }

    push(data){
        const newNode = new LinkedListNode(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(){
        if(!this.top) return null;
        const popped = this.top.data;
        this.top = this.top.next;
        return popped;
    }

    printStack(){
        let temp = this.top;
        let arr = [];
        while(temp){
            arr.push(temp.data);
            temp = temp.next;
        }
        return arr.join("->");
    }
}

const stack = new StackUsingLinkedList();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.pop();
console.log(stack.printStack());