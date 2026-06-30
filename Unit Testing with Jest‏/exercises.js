class Exercises {
    // Exercise 1
    isEven(n) {
        return n % 2 == 0 ? true : false;
    }

    // Exercise 2
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
        arr.splice(0, numItemsToRemove);
        return arr;
    }

    // Exercise 3
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"];
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("");
    }

    // Exercise 4 (TDD)
    validate(arr) {
        if (!arr || !Array.isArray(arr)) {
            return { error: "Need at least one boolean" };
        }

        let bools = arr.filter(item => typeof item === "boolean");
        
        if (bools.length === 0) {
            return { error: "Need at least one boolean" };
        }

        let trues = bools.filter(b => b === true).length;
        let falses = bools.filter(b => b === false).length;

        return trues > falses;
    }

    // Extension
    add(x, y) {
        let stuff = [];
        stuff.push(x, y);
    }
}

module.exports = Exercises;