class UniqueArray {
    constructor() {
        this.items = [];
        this.tracker = new Set(); 
    }

    add(item) {
        // add if the Set doesn't already have it
        if (!this.exists(item)) {
            this.items.push(item);
            this.tracker.add(JSON.stringify(item));
        }
    }

    showAll() {
        console.log(this.items);
    }
    
    exists(item) {
        return this.tracker.has(JSON.stringify(item));
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
uniqueStuff.add({ x: 3 })
uniqueStuff.showAll() //prints [{ x: 3 }]
uniqueStuff.add({ x: 3 })
uniqueStuff.showAll() //prints [{ x: 3 }]
console.log(uniqueStuff.exists({ x: 3 })) //returns true