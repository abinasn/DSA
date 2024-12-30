class TreeNode {
    data: number;
    left: any;
    right: any;

    constructor(data:number){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class TreeNodeInfo{
    height: number;
    diameter: number;
    
    constructor(h:number, d:number){
        this.height = h;
        this.diameter = d;
    }
}

class LinkedListNode{
    treeNode: TreeNode | null;
    next: LinkedListNode | null;
    
    constructor(node: TreeNode | null){
        this.treeNode = node;
        this.next = null;
    }
}

class Queue{
    front: LinkedListNode | null;
    rear: LinkedListNode | null;
    size: number

    constructor(){
        this.front = null
        this.rear = null;
        this.size = 0;
    }

    add(node: TreeNode | null): void{
        const newLinkedListNode = new LinkedListNode(node);
        if(!this.front){
            this.front = newLinkedListNode;
        }else if(this.rear){
            this.rear.next = newLinkedListNode;
        }
        this.rear = newLinkedListNode;
        this.size++;
    }

    remove(): TreeNode | null{
        if(!this.front){
            return null;
        }
        const frontNode = this.front;
        this.front = frontNode.next;
        if(!this.front){
            this.rear = null;
        }
        this.size--;
        return frontNode.treeNode;
    }

    isEmpty(): boolean{
        return this.size == 0;
    }
}

class BinaryTree{
    index: number;

    constructor(){
        this.index = -1;
    }

    buildBinaryTree(nodes: number[]): TreeNode | null{
        this.index++;
        if(!nodes[this.index] || nodes[this.index] == -1){
            return null;
        }
        const newNode = new TreeNode(nodes[this.index]);
        newNode.left = this.buildBinaryTree(nodes);
        newNode.right = this.buildBinaryTree(nodes);
        return newNode;
    }

    //root left right -> 1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1
    // Preorder traversal using queue
    preOrderUsingStack(root: TreeNode | null): string {
        if (!root) return "";
        let stack = [root], result = "";
        while(stack.length > 0){
            const popped = stack.pop();
            result += popped?.data + " ";
            if(popped?.right){
                stack.push(popped.right);
            }
            if(popped?.left){
                stack.push(popped.left);
            }
        }
        return result;
    }
    preOrder(root: TreeNode | null, str: string): string{
        if(!root){
            return str;
            return str + "-1" + " ";
        }
        str += root.data + " ";
        str = this.preOrder(root.left, str);
        str = this.preOrder(root.right, str);
        return str;
    }

    inOrderUsingStack(root: TreeNode | null): string{
        if(!root) return "";
        let result = [];
        let stack = [];
        let curr = root;
        while (curr || stack.length > 0){
            while(curr){
                stack.push(curr);
                curr = curr.left;
            }
            const pop = stack.pop();
            result.push(pop?.data);
            curr = pop?.right;
        }
        return result.join(" ");

    }
    //left root right
    inOrder(root: TreeNode | null, str: string): string{
        if (!root) {
            return str;
            return str + "-1" + " ";
        }
        str = this.inOrder(root.left, str)
        str += root.data + " ";
        str = this.inOrder(root.right, str);
        return str;
    }

    // postOrderUsingStack(root: TreeNode | null): string{
    //     if(!root) return "";
    //     let result = [];
    //     let stack = [];
    //     let curr = root;
    //     while(curr || stack.length > 0){
            
    //     }
    // }
    //left right root
    postOrder(root: TreeNode | null, str:string): string {
        if (!root) {
            return str;
        }
        str = this.postOrder(root.left, str);
        str = this.postOrder(root.right, str);
        str += root.data + " ";
        return str;
    }

    levelOrder(root: TreeNode| null): string{
        if(!root){
            return "";
        }
        const queue:Queue = new Queue();
        queue.add(root);
        queue.add(null);

        let str = "";
        while(!queue.isEmpty()){
            const removedNode:TreeNode|null = queue.remove();
            if(!removedNode){
                str += "\n";
                if(!queue.isEmpty()){
                    queue.add(null);
                }else{
                    str = str.trim();
                    break;
                }
            }else{
                str += removedNode.data + " ";
                if(removedNode.left){
                    queue.add(removedNode.left);
                }
                if(removedNode.right){
                    queue.add(removedNode.right);
                }
            }
        }
        return str;
    }

    countNodes(root: TreeNode | null): number{
        if(!root){
            return 0;
        }
        let leftCount: number = this.countNodes(root.left);
        let rightCount: number = this.countNodes(root.right);

        return leftCount + rightCount + 1;
    }

    sumOfNodes(root: TreeNode | null): number{
        if(!root){
            return 0;
        }
        let leftSum: number = this.sumOfNodes(root.left);
        let rightSum: number = this.sumOfNodes(root.right);
        return leftSum + rightSum + root.data;
    }

    heightOfTree(root: TreeNode | null): number{
        if(!root){
            return 0;
        }
        let leftHeight = this.heightOfTree(root.left);
        let rightHeight = this.heightOfTree(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    diameterOfTree(root: TreeNode | null):number{
        if(!root){
            return 0;
        }
        let leftDiameter = this.diameterOfTree(root.left);
        let rightDiameter = this.diameterOfTree(root.right);
        let rootDiameter = this.heightOfTree(root.left) + this.heightOfTree(root.right) + 1;
        return Math.max(rootDiameter, Math.max(leftDiameter, rightDiameter));
    }

    optimizedDiameterOfTree(root: TreeNode | null): TreeNodeInfo{
        if(!root){
            return new TreeNodeInfo(0,0);
        }
        let leftData: TreeNodeInfo = this.optimizedDiameterOfTree(root.left);
        let rightData: TreeNodeInfo = this.optimizedDiameterOfTree(root.right);
        let treeNodeHeight = Math.max(leftData.height, rightData.height) + 1;

        let leftDiameter = leftData.diameter;
        let rightDiameter = rightData.diameter;
        let rootDiameter = leftData.height + rightData.height + 1;
        let diameter = Math.max(rootDiameter, Math.max(leftDiameter, rightDiameter));

        const newData = new TreeNodeInfo(treeNodeHeight, diameter);
        return newData;
    }

    isIdentical(root: TreeNode | null, subTree: TreeNode | null): boolean{
        if(!root && !subTree) return true;
        if(!root || !subTree) return false;

        if(root.data == subTree.data){
            return this.isIdentical(root.left, subTree.left) && this.isIdentical(root.right, subTree.right);
        }
        return false;
    }

    checkSubTree(root: TreeNode | null, subTree: TreeNode | null): boolean{
        if(!subTree) return true;
        if(!root) return false;

        if(this.isIdentical(root, subTree)){
            return true;
        }

        return this.checkSubTree(root.left, subTree) || this.checkSubTree(root.right, subTree);
    }

    sumOfNodesInKthLevel(root: TreeNode|null, k:number): number{
        if(!root) return 0;
        if(k<=0) return 0;

        let level = 0, sum = 0;
        let queue = new Queue();
        queue.add(root);
        queue.add(null);

        while(!queue.isEmpty()){
            const removedNode = queue.remove();
            if(!removedNode){
                level++;
                if(level == k) return sum;
                else sum = 0;
                if(!queue.isEmpty()){
                    queue.add(null);
                }
            }else{
                sum += removedNode.data;
                if(level < k-1){
                    if(removedNode.left){
                        queue.add(removedNode.left);
                    }
                    if(removedNode.right){
                        queue.add(removedNode.right);
                    }
                }                
            }
        }
        return -1;
    }
}

let arr:number[] = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1,-1];

const bt = new BinaryTree();
const btRoot: TreeNode | null = bt.buildBinaryTree(arr);
// console.log(btRoot?.data);
// console.log(bt.preOrderUsingStack(btRoot));
// console.log(bt.preOrder(btRoot, ""));
// console.log(bt.inOrder(btRoot, ""));
// console.log(bt.inOrderUsingStack(btRoot));
console.log(bt.postOrder(btRoot, ""));
// console.log(bt.levelOrder(btRoot));
// console.log(bt.countNodes(btRoot));
// console.log(bt.sumOfNodes(btRoot));
// console.log(bt.heightOfTree(btRoot));
// console.log(bt.diameterOfTree(btRoot));

// console.log(bt.optimizedDiameterOfTree(btRoot).diameter);
// console.log(bt.sumOfNodesInKthLevel(btRoot, 2));

