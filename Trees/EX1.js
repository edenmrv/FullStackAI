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

    findNode(value) {
        // Check if the current node holds the value we are looking for
        if (this.value === value) {
            return true;
        }

        // If the value we want is smaller than current node's value, search left
        if (value < this.value && this.leftChild) {
            return this.leftChild.findNode(value);
        }

        // If the value we want is greater than current node's value, search right
        if (value > this.value && this.rightChild) {
            return this.rightChild.findNode(value);
        }

        // If we reached a leaf and haven't found the value
        return false;
    }
}


// Test



const bsTree = new BSNode("H");
const letters = ["E", "S", "G", "L", "Y", "I"]; // "H" is already the root

letters.forEach(letter => bsTree.insertNode(letter));

// Test the findNode method
console.log(bsTree.findNode("H")); // should print true
console.log(bsTree.findNode("G")); // should print true
console.log(bsTree.findNode("Z")); // should print false
console.log(bsTree.findNode("F")); // should print false
console.log(bsTree.findNode("y")); // should print false 