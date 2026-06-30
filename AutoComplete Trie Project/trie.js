const readline = require('readline');

class TrieNode {
    constructor(value = '') {
        this.value = value;
        this.children = {};
        this.isWord = false; 
        this.freq = 0; 
    }
}

class AutoCompleteTrie {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let curr = this.root;
        for (const char of word.toLowerCase()) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode(char);
            }
            curr = curr.children[char];
        }
        curr.isWord = true;
    }

    findWord(word) {
        let curr = this.root;
        for (const char of word.toLowerCase()) {
            if (!curr.children[char]) return false;
            curr = curr.children[char];
        }
        return curr.isWord;
    }

    useWord(word) {
        let curr = this.root;
        for (const char of word.toLowerCase()) {
            if (!curr.children[char]) return false;
            curr = curr.children[char];
        }
        
        if (!curr.isWord) return false;
        
        curr.freq++;
        return curr.freq;
    }

    _getPrefixNode(prefix) {
        let curr = this.root;
        for (const char of prefix.toLowerCase()) {
            if (!curr.children[char]) return null;
            curr = curr.children[char];
        }
        return curr;
    }

    _collectWords(prefix, node, results) {
        if (node.isWord) {
            results.push({ word: prefix, freq: node.freq });
        }
        
        // Using Object.entries for cleaner iteration
        for (const [char, childNode] of Object.entries(node.children)) {
            this._collectWords(prefix + char, childNode, results);
        }
    }

    predictWords(prefix) {
        const startNode = this._getPrefixNode(prefix);
        if (!startNode) return [];

        const results = [];
        this._collectWords(prefix.toLowerCase(), startNode, results);

        // Sort by frequency descending
        return results.sort((a, b) => b.freq - a.freq);
    }
}
module.exports = AutoCompleteTrie;

// CLI Setup
if (require.main === module) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '> '
    });

    const trie = new AutoCompleteTrie();

    console.log("=== AutoComplete Trie ===\nType 'help' to see commands.\n");
    rl.prompt();

    rl.on('line', (line) => {
        // Modern destructuring to easily grab the command and the rest of the words
        const [cmd, ...args] = line.trim().split(/\s+/);
        const word = args.join(' ').toLowerCase();

        switch (cmd?.toLowerCase()) {
            case 'add':
                if (!word) return console.log("Missing word. Try: add cat");
                trie.addWord(word);
                console.log(`✓ Added '${word}'`);
                break;
                
            case 'find':
                if (!word) return console.log("Missing word. Try: find cat");
                console.log(trie.findWord(word) ? `✓ Found '${word}'` : `✗ '${word}' not found`);
                break;
                
            case 'complete':
                if (!word) return console.log("Missing prefix. Try: complete ca");
                const suggestions = trie.predictWords(word);
                
                if (!suggestions.length) {
                    console.log(`No matches for '${word}'`);
                } else {
                    const out = suggestions.map(s => `${s.word} (${s.freq})`).join(', ');
                    console.log(`Suggestions: ${out}`);
                }
                break;
                
            case 'use':
                if (!word) return console.log("Missing word. Try: use cat");
                const freq = trie.useWord(word);
                console.log(freq ? `✓ Used '${word}' (count: ${freq})` : `✗ '${word}' not in dict`);
                break;
                
            case 'help':
                console.log("Commands: add <word>, find <word>, complete <prefix>, use <word>, exit");
                break;
                
            case 'exit':
                console.log('Bye!');
                process.exit(0);
                
            default:
                if (cmd) console.log("Unknown command. Type 'help'.");
        }
        console.log(''); 
        rl.prompt();
    }).on('close', () => process.exit(0));
}