/**
 * Will create a new Node
 * Will create a LinkedList class and will do all the operations, 
 * 1. Insert an element in the beginning
 * 2. Insert an element in the end
 * 3. Insert an element at a certain position
 * 4. Delete from beginning
 * 5. Delete at end
 * 6. Delete at certain position
 * 7. size of list
 * 8. reverse the list
 * 9. rotate the list
 */

class LinkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    addInBeginning(data){
        const newNode = new LinkedListNode(data);
        if(this.head){
            newNode.next = this.head;
        }
        this.head = newNode;
    }

    addInEnd(data){
        const newNode = new LinkedListNode(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current && current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    addInAPosition(data, pos){

    }

    //should return the deleted node and update the head
    deleteFromBeginning(){

    }
    //should return the deleted node
    deleteFromEnd(){

    }
    //Should return deleted node
    deleteFromAPosition(pos){

    }

    sizeOfList(){

    }

    reverseList(){

    }

    rotateList(){

    }

}

const list = new LinkedList();
console.log(list.head)