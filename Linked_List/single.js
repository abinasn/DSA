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
        if(pos < 0) return;
        const newNode = new LinkedListNode(data);
        let count = 0, current = this.head;
        if(pos == 0){
            this.addInBeginning(data);
            return;
        }
        while(current){
            if(pos-1 === count) break;
            count++;
            current = current.next;
        }
        if(!current){
            throw new Error("Position not found");
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    //should return the deleted node and update the head
    deleteFromBeginning(){
        const temp = this.head?.next;
        const data = this.head?.data;
        this.head = temp;
        return data || null;
    }
    //should return the deleted node
    deleteFromEnd(){
        let current = this.head;
        if(!current) return null;
        if(!current.next){
            this.head = null;
            return current.data;
        }
        while(current.next.next){
            current = current.next;
        }
        const temp = current.next.data;
        current.next = null;
        return temp
    }
    //Should return deleted node
    deleteFromAPosition(pos){
        let deleted = null;
        if(pos < 0) return deleted;
        let count = 0, current = this.head;
        if(pos == 0) {
            deleted = this.deleteFromBeginning();
            return deleted;
            
        }
        while(current){
            if(pos-1 == count) break;
            count++;
            current = current.next;
        }
        if(!current){
            throw new Error("Position not found");
        }
        deleted = current.next?.data;
        current.next = current.next?.next;
        return deleted;
    }

    sizeOfList(){
        let count = 0, current = this.head;
        while(current){
            current = current.next;
            count++;
        }
        return count;
    }

    reverseList(head = this.head){
        // if(!this.head) return;
        // let prev = null;
        // while(this.head){
        //     const next = this.head.next;
        //     this.head.next = prev;
        //     prev = this.head;
        //     this.head = next;
        // }
        // this.head = prev;

        if(!head || !head.next){
            return head;
        }
        const newHead = this.reverseList(head.next);
        const temp = head.next;
        temp.next = head;
        head.next = null;
        this.head = newHead;
        return this.head;
    }

    showList(){
        let current = this.head;
        let arr = [];
        while(current){
            arr.push(current.data);
            current = current.next;
        }
        return arr.join("->")
    }
    showHead(){
        return this.head?.data;
    }

}

const list = new LinkedList();
// console.log(list.showHead());
// list.deleteFromBeginning();
list.addInBeginning(1);
// list.deleteFromBeginning();
list.addInBeginning(2);
list.addInBeginning(3);
list.addInEnd(4);
list.deleteFromEnd();
list.addInBeginning(4);
list.addInBeginning(5);
// console.log(list.deleteFromAPosition(3))
// list.addInAPosition(10,0);
// list.deleteFromBeginning();

console.log(list.showList(), list.showHead(), list.sizeOfList());
list.reverseList();
console.log(list.showList(), list.showHead(), list.sizeOfList());
