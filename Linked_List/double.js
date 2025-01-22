class LinkedlistNode{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addInBeginning(data){
        const newNode = new LinkedlistNode(data);
        if(this.head){
            newNode.next = this.head;
            this.head.prev = newNode;
        }
        this.head = newNode;
    }

    addInEnd(data){
        const newNode = new LinkedlistNode(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current && current.next){
            current = current.next
        }
        newNode.prev = current;
        current.next = newNode;
    }

    addInAPosition(data, pos){
        
    }

    deleteFronBeginning(){

    }

    deleteFromEnd(){

    }

    deleteFromAPosition(pos){

    }

    reverseList(){

    }

    showList(){
        let current = this.head;
        let arr = [];
        while(current){
            arr.push(current.data);
            current=current.next;
        }
        return arr.join("<=>")
    }
}


const list = new LinkedList();

list.addInBeginning(1);
list.addInBeginning(2);
list.addInBeginning(3);
list.addInBeginning(4)
list.addInBeginning(5);
list.addInEnd(7)

console.log(list.showList(), list.head?.data)