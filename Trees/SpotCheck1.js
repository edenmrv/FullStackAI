class Node {
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
    
    insertLeft(value) {
        if (!this.leftChild) {
            this.leftChild = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.leftChild = this.leftChild;
            this.leftChild = newNode;
        }
    }

    insertRight(value) {
        if (!this.rightChild) {
            this.rightChild = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.rightChild = this.rightChild;
            this.rightChild = newNode;
        }
    }
}

// Root
const H = new Node('H');


H.insertLeft('E');
H.insertRight('S');


H.leftChild.insertRight('G');


H.rightChild.insertLeft('L');
H.rightChild.insertRight('Y');


H.rightChild.leftChild.insertLeft('I');


console.log(H);