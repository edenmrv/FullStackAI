class UniqueArray {
    constructor() {
        this.items = [];
        this.tracker = new Set(); 
    }

    add(item) {
        // add if the Set doesn't already have it
        if (!this.exists(item)) {
            this.items.push(item);
            this.tracker.add(item);
        }
    }

    showAll() {
        console.log(this.items);
    }
    exists(item) {
        return this.tracker.has(item);
    }

    get(index) {
        // Check if the index is out of bounds
        if (index < 0 || index >= this.items.length) {
            return -1;
        }
        return this.items[index];
    }
}


const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"