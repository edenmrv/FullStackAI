class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal;
        } else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal);
        } else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal);
        } else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal);
        } else {
            this.rightChild = new BSNode(newVal);
        }
    }

    removeNode(node, value) {
        if (!node) {
            return null;
        }

        // Searching for the node
        if (value < node.value) {
            node.leftChild = this.removeNode(node.leftChild, value);
            return node;
        } else if (value > node.value) {
            node.rightChild = this.removeNode(node.rightChild, value);
            return node;
        } else {
            // We found the node to delete. (value === node.value)

            // Scenario 1: Leaf node
            if (!node.leftChild && !node.rightChild) {
                return null; // Parent will receive null and sever the reference
            }

            // Scenario 2: The node has exactly one child
            if (!node.leftChild) {
                return node.rightChild; // Pass the right child up to the parent
            }
            if (!node.rightChild) {
                return node.leftChild; // Pass the left child up to the parent
            }

            // Scenario 3: The node has two children
            // Find the maximum value to the left of the node 
            let maxLeft = node.leftChild;
            while (maxLeft.rightChild) {
                maxLeft = maxLeft.rightChild;
            }

            // Replace current node's value with the max value from the left
            node.value = maxLeft.value;

            // Delete the node we copied from the left subtree
            node.leftChild = this.removeNode(node.leftChild, maxLeft.value);
            
            return node;
        }
    }
}


// Test


const numbers = [8, 9, 12, 3, 5, 1, 11, 4];

let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log("Tree after deleting 9:");
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); 

let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log("\nTree after deleting 8 (the root):");
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8));