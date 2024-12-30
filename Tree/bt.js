var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var TreeNodeInfo = /** @class */ (function () {
    function TreeNodeInfo(h, d) {
        this.height = h;
        this.diameter = d;
    }
    return TreeNodeInfo;
}());
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(node) {
        this.treeNode = node;
        this.next = null;
    }
    return LinkedListNode;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    Queue.prototype.add = function (node) {
        var newLinkedListNode = new LinkedListNode(node);
        if (!this.front) {
            this.front = newLinkedListNode;
        }
        else if (this.rear) {
            this.rear.next = newLinkedListNode;
        }
        this.rear = newLinkedListNode;
        this.size++;
    };
    Queue.prototype.remove = function () {
        if (!this.front) {
            return null;
        }
        var frontNode = this.front;
        this.front = frontNode.next;
        if (!this.front) {
            this.rear = null;
        }
        this.size--;
        return frontNode.treeNode;
    };
    Queue.prototype.isEmpty = function () {
        return this.size == 0;
    };
    return Queue;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.index = -1;
    }
    BinaryTree.prototype.buildBinaryTree = function (nodes) {
        this.index++;
        if (!nodes[this.index] || nodes[this.index] == -1) {
            return null;
        }
        var newNode = new TreeNode(nodes[this.index]);
        newNode.left = this.buildBinaryTree(nodes);
        newNode.right = this.buildBinaryTree(nodes);
        return newNode;
    };
    //root left right -> 1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1
    // Preorder traversal using queue
    BinaryTree.prototype.preOrderUsingStack = function (root) {
        if (!root)
            return "";
        var stack = [root], result = "";
        while (stack.length > 0) {
            var popped = stack.pop();
            result += (popped === null || popped === void 0 ? void 0 : popped.data) + " ";
            if (popped === null || popped === void 0 ? void 0 : popped.right) {
                stack.push(popped.right);
            }
            if (popped === null || popped === void 0 ? void 0 : popped.left) {
                stack.push(popped.left);
            }
        }
        return result;
    };
    BinaryTree.prototype.preOrder = function (root, str) {
        if (!root) {
            return str;
            return str + "-1" + " ";
        }
        str += root.data + " ";
        str = this.preOrder(root.left, str);
        str = this.preOrder(root.right, str);
        return str;
    };
    BinaryTree.prototype.inOrderUsingStack = function (root) {
        if (!root)
            return "";
        var result = [];
        var stack = [];
        var curr = root;
        while (curr || stack.length > 0) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }
            var pop = stack.pop();
            result.push(pop === null || pop === void 0 ? void 0 : pop.data);
            curr = pop === null || pop === void 0 ? void 0 : pop.right;
        }
        return result.join(" ");
    };
    //left root right
    BinaryTree.prototype.inOrder = function (root, str) {
        if (!root) {
            return str;
            return str + "-1" + " ";
        }
        str = this.inOrder(root.left, str);
        str += root.data + " ";
        str = this.inOrder(root.right, str);
        return str;
    };
    // postOrderUsingStack(root: TreeNode | null): string{
    //     if(!root) return "";
    //     let result = [];
    //     let stack = [];
    //     let curr = root;
    //     while(curr || stack.length > 0){
    //     }
    // }
    //left right root
    BinaryTree.prototype.postOrder = function (root, str) {
        if (!root) {
            return str;
        }
        str = this.postOrder(root.left, str);
        str = this.postOrder(root.right, str);
        str += root.data + " ";
        return str;
    };
    BinaryTree.prototype.levelOrder = function (root) {
        if (!root) {
            return "";
        }
        var queue = new Queue();
        queue.add(root);
        queue.add(null);
        var str = "";
        while (!queue.isEmpty()) {
            var removedNode = queue.remove();
            if (!removedNode) {
                str += "\n";
                if (!queue.isEmpty()) {
                    queue.add(null);
                }
                else {
                    str = str.trim();
                    break;
                }
            }
            else {
                str += removedNode.data + " ";
                if (removedNode.left) {
                    queue.add(removedNode.left);
                }
                if (removedNode.right) {
                    queue.add(removedNode.right);
                }
            }
        }
        return str;
    };
    BinaryTree.prototype.countNodes = function (root) {
        if (!root) {
            return 0;
        }
        var leftCount = this.countNodes(root.left);
        var rightCount = this.countNodes(root.right);
        return leftCount + rightCount + 1;
    };
    BinaryTree.prototype.sumOfNodes = function (root) {
        if (!root) {
            return 0;
        }
        var leftSum = this.sumOfNodes(root.left);
        var rightSum = this.sumOfNodes(root.right);
        return leftSum + rightSum + root.data;
    };
    BinaryTree.prototype.heightOfTree = function (root) {
        if (!root) {
            return 0;
        }
        var leftHeight = this.heightOfTree(root.left);
        var rightHeight = this.heightOfTree(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    };
    BinaryTree.prototype.diameterOfTree = function (root) {
        if (!root) {
            return 0;
        }
        var leftDiameter = this.diameterOfTree(root.left);
        var rightDiameter = this.diameterOfTree(root.right);
        var rootDiameter = this.heightOfTree(root.left) + this.heightOfTree(root.right) + 1;
        return Math.max(rootDiameter, Math.max(leftDiameter, rightDiameter));
    };
    BinaryTree.prototype.optimizedDiameterOfTree = function (root) {
        if (!root) {
            return new TreeNodeInfo(0, 0);
        }
        var leftData = this.optimizedDiameterOfTree(root.left);
        var rightData = this.optimizedDiameterOfTree(root.right);
        var treeNodeHeight = Math.max(leftData.height, rightData.height) + 1;
        var leftDiameter = leftData.diameter;
        var rightDiameter = rightData.diameter;
        var rootDiameter = leftData.height + rightData.height + 1;
        var diameter = Math.max(rootDiameter, Math.max(leftDiameter, rightDiameter));
        var newData = new TreeNodeInfo(treeNodeHeight, diameter);
        return newData;
    };
    BinaryTree.prototype.isIdentical = function (root, subTree) {
        if (!root && !subTree)
            return true;
        if (!root || !subTree)
            return false;
        if (root.data == subTree.data) {
            return this.isIdentical(root.left, subTree.left) && this.isIdentical(root.right, subTree.right);
        }
        return false;
    };
    BinaryTree.prototype.checkSubTree = function (root, subTree) {
        if (!subTree)
            return true;
        if (!root)
            return false;
        if (this.isIdentical(root, subTree)) {
            return true;
        }
        return this.checkSubTree(root.left, subTree) || this.checkSubTree(root.right, subTree);
    };
    BinaryTree.prototype.sumOfNodesInKthLevel = function (root, k) {
        if (!root)
            return 0;
        if (k <= 0)
            return 0;
        var level = 0, sum = 0;
        var queue = new Queue();
        queue.add(root);
        queue.add(null);
        while (!queue.isEmpty()) {
            var removedNode = queue.remove();
            if (!removedNode) {
                level++;
                if (level == k)
                    return sum;
                else
                    sum = 0;
                if (!queue.isEmpty()) {
                    queue.add(null);
                }
            }
            else {
                sum += removedNode.data;
                if (level < k - 1) {
                    if (removedNode.left) {
                        queue.add(removedNode.left);
                    }
                    if (removedNode.right) {
                        queue.add(removedNode.right);
                    }
                }
            }
        }
        return -1;
    };
    return BinaryTree;
}());
var arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
var bt = new BinaryTree();
var btRoot = bt.buildBinaryTree(arr);
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
