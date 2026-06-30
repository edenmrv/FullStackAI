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

    findCommonParent(val1, val2) {
        if (val1 < this.value && val2 < this.value) {
            if (this.leftChild && (this.leftChild.value === val1 || this.leftChild.value === val2)) {
                return this.value;
            }
            return this.leftChild.findCommonParent(val1, val2);
        } 
        else if (val1 > this.value && val2 > this.value) {
            if (this.rightChild && (this.rightChild.value === val1 || this.rightChild.value === val2)) {
                return this.value;
            }
            return this.rightChild.findCommonParent(val1, val2);
        } 
        else {
            return this.value;
        }
    }
}


// Test
const bsTree = new BSNode("J");
const arr = ["H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];

arr.forEach(val => bsTree.insertNode(val));

// Test cases
console.log(bsTree.findCommonParent("B", "I")); // should return "H"
console.log(bsTree.findCommonParent("B", "G")); // should return "E"
console.log(bsTree.findCommonParent("B", "L")); // should return "J"
console.log(bsTree.findCommonParent("L", "Y")); // should return "R"
console.log(bsTree.findCommonParent("E", "H")); // should return "J"