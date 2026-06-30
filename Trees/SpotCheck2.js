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
}


const tree = new BSNode('H');


tree.insertNode('E');
tree.insertNode('S');
tree.insertNode('G');
tree.insertNode('L');
tree.insertNode('Y');
tree.insertNode('I');


console.log(tree);