class BSTree {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class ScoreTree extends BSTree {
    constructor(value, score) {
        super(value);
        this.score = score;
    }

    insertNode(key, score) {
        if (!this.value) {
            this.value = key;
            this.score = score;
        } else if (score > this.score && this.rightChild) {
            this.rightChild.insertNode(key, score);
        } else if (score <= this.score && this.leftChild) {
            this.leftChild.insertNode(key, score);
        } else if (score <= this.score) {
            this.leftChild = new ScoreTree(key, score);
        } else {
            this.rightChild = new ScoreTree(key, score);
        }
    }

    // Finds the morse code path for a single letter
    findLetter(letterToFind, currentPath = "") {
        // If we found the letter, return the path we took to get here
        if (this.value === letterToFind) {
            return currentPath;
        }

        let foundPath = null;

        // Search Left 
        if (this.leftChild && !foundPath) {
            foundPath = this.leftChild.findLetter(letterToFind, currentPath + ".");
        }

        // Search Right 
        if (this.rightChild && !foundPath) {
            foundPath = this.rightChild.findLetter(letterToFind, currentPath + "-");
        }

        return foundPath;
    }

    // Translates standard English text to Morse code
    translateWord(text) {
        const words = text.toUpperCase().split(" ");
        const translatedWords = [];

        for (let word of words) {
            const letterCodes = [];
            for (let i = 0; i < word.length; i++) {
                const letter = word[i];
                const code = this.findLetter(letter);
                if (code) {
                    letterCodes.push(code);
                }
            }
            // Join letters in a word with a single space
            translatedWords.push(letterCodes.join(" "));
        }

        // Join words with " / "
        const finalMorse = translatedWords.join(" / ");
        console.log(finalMorse);
        return finalMorse;
    }

    // Translates Morse code back to standard English
    translateMorse(morseCodeString) {
        const words = morseCodeString.split(" / ");
        let translatedText = "";

        for (let word of words) {
            const letters = word.split(" ");
            for (let code of letters) {
                // To decode, we traverse the tree based on the dots and dashes
                let currentNode = this;
                for (let i = 0; i < code.length; i++) {
                    const symbol = code[i];
                    if (symbol === "." && currentNode.leftChild) {
                        currentNode = currentNode.leftChild;
                    } else if (symbol === "-" && currentNode.rightChild) {
                        currentNode = currentNode.rightChild;
                    }
                }
                translatedText += currentNode.value;
            }
            // Add space between words
            translatedText += " "; 
        }

        // Clean up the final string 
        const finalString = translatedText.trim().toLowerCase();
        console.log(finalString);
        return finalString;
    }
}

// Setup and Testing 
const alphabet = {
    'E': 25, 'T': 75, 'I': 12, 'A': 37, 'N': 62, 'M': 87, 'S': 6, 'U': 18, 
    'R': 31, 'W': 43, 'D': 56, 'K': 68, 'G': 81, 'O': 93, 'H': 3, 'V': 9, 
    'F': 15, 'L': 28, 'P': 40, 'J': 46, 'B': 53, 'X': 59, 'C': 65, 'Y': 71, 
    'Z': 78, 'Q': 84
};

// Initialize the MorseCode tree
const morseCode = new ScoreTree("TOP", 50); // "TOP" represents the START node

Object.keys(alphabet).forEach(l => {
    morseCode.insertNode(l, alphabet[l]);
});

// Run Tests
console.log("--- English to Morse ---");
morseCode.translateWord("welcome"); 
// Expected: .-- . .-.. -.-. --- -- . 
morseCode.translateWord("elevation is cool"); 
// Expected: . .-.. . ...- .- - .. --- -. / .. ... / -.-. --- --- .-.. 

console.log("\n--- Morse to English ---");
morseCode.translateMorse(".... --- ...."); // Note: modified your test case slightly to valid morse ("---" instead of "----")
// Expected: hoh
morseCode.translateMorse("-. .. -.-. . / .--- --- -... / --- -. / - .... . / .-.. . ... ... --- -.");
// Expected: nice job on the lesson