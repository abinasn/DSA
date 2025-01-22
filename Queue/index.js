class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class QueueLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(data) {
        const newNode = new LinkedListNode(data);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
            return;
        }
        this.rear.next = newNode;
        this.rear = newNode;
    }

    dequeue() {
        if (!this.front) return null;
        const data = this.front.data;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        return data;
    }
}

