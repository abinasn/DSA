

class BinarySearchTreeNode{
    data: number;
    left: any;
    right: any;

    constructor(data: number){
        this.data = data;
    }
}


class BinarySearchTree{
    insertNode(root: BinarySearchTreeNode | null, val: number): BinarySearchTreeNode{
        const newNode = new BinarySearchTreeNode(val);
        if(!root){
            root = newNode;
            return root;
        }

        if(root.data > val){
            root.left = this.insertNode(root.left, val);
        }else{
            root.right = this.insertNode(root.right, val);
        }
        return root;
    }

    inorder(root: BinarySearchTreeNode | null): void{
        // if(!root){
        //     return;
        // }
        // this.inorder(root.left);
        // process.stdout.write(root.data + " ");
        // this.inorder(root.right);
        if(!root) return;
        let curr = root, stack: BinarySearchTreeNode[]=[];
        while(curr || stack.length > 0){
            while(curr){
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop()!;
            process.stdout.write(curr.data + " ");
            
            curr = curr.right;
        }
    }

    search(root: BinarySearchTreeNode | null, key: number): boolean{
        if(!root) return false;
        if(root.data == key) return true;

        if(key < root.data){
            return this.search(root.left, key);
        }else{
            return this.search(root.right, key)
        }
    }

    deleteNode(root: BinarySearchTreeNode | null, key: number): BinarySearchTreeNode | null{
        if(!root) return null;
        // Find the node;
        if(key < root.data){
            root.left = this.deleteNode(root.left, key);
        }else if (key > root.data){
            root.right = this.deleteNode(root.right, key);
        }else{
            // Case 1:- if delete node is a leaf node.
            if(root.left == null && root.right == null) return null;

            // Case 2:- if delete node has atleast one left or right child;
            if(root.left == null){
                return root.right;
            }else if(root.right == null){
                return root.left;
            }else{

                //Case 3:- If deleted node has both the childs
                /**
                 * 1. Find the inorder successor of deleted node by traversing the entire right subtree until we find the left most child
                 * 2. replace the root data with successor data
                 * 3. delete the successor node from the right subtree
                 */
                const ios = this.getInorderSuccessor(root.right);
                root.data = ios.data;
                this.deleteNode(root.right, ios.data);
            }
        }
        return root;
    }

    getInorderSuccessor(root: BinarySearchTreeNode): BinarySearchTreeNode{
        while(root.left){
            root = root.left;
        }
        return root;
    }
}


let bstArr = [5,1,3,4,2,7];
const bst = new BinarySearchTree();
let bstRoot = null;

for(let i=0;i<bstArr.length;i++){
    bstRoot = bst.insertNode(bstRoot, bstArr[i]);
}

bst.inorder(bstRoot);
console.log()
// console.log(bst.search(bstRoot, 6));
bstRoot = bst.deleteNode(bstRoot, 4)
bst.inorder(bstRoot);
console.log();