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
        this.wordCount = 0;
    }

    addWord(word) {
        word = word.toLowerCase();
        // Return false if word already exists so we don't double count
        if (this.findWord(word)) return false; 

        let curr = this.root;
        for (const char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode(char);
            }
            curr = curr.children[char];
        }
        curr.isWord = true;
        this.wordCount++;
        return true;
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
        for (const [char, childNode] of Object.entries(node.children)) {
            this._collectWords(prefix + char, childNode, results);
        }
    }

    predictWords(prefix) {
        const startNode = this._getPrefixNode(prefix);
        if (!startNode) return [];

        const results = [];
        this._collectWords(prefix.toLowerCase(), startNode, results);
        return results.sort((a, b) => b.freq - a.freq);
    }
}

const trie = new AutoCompleteTrie();

const addInput = document.getElementById('add-word-input');
const addBtn = document.getElementById('add-word-btn');
const messageBox = document.getElementById('message-box');
const searchInput = document.getElementById('search-input');
const suggestionsBox = document.getElementById('suggestions-box');
const wordCountDisplay = document.getElementById('word-count');

function showMessage(text, isError = false) {
    messageBox.textContent = isError ? `✗ ${text}` : `✓ ${text}`;
    messageBox.className = `message ${isError ? 'error' : 'success'}`;
    
    // Clear previous timeout if exists
    if (window.messageTimeout) clearTimeout(window.messageTimeout);
    
    // Hide message after 3 seconds
    window.messageTimeout = setTimeout(() => {
        messageBox.classList.add('hidden');
    }, 3000);
}

// Handle Add Word Event
addBtn.addEventListener('click', () => {
    const word = addInput.value.trim();
    
    if (!word) {
        showMessage('Cannot add empty word', true);
        return;
    }
    
    const wasAdded = trie.addWord(word);
    
    if (wasAdded) {
        showMessage(`Added '${word}' to dictionary`, false);
        wordCountDisplay.textContent = trie.wordCount;
        addInput.value = '';
    
        if (searchInput.value) {
            searchInput.dispatchEvent(new Event('input'));
        }
    } else {
        showMessage(`'${word}' is already in the dictionary`, true);
    }
});
addInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addBtn.click();
});
searchInput.addEventListener('input', (e) => {
    const prefix = e.target.value.trim().toLowerCase();
    
    // Clear suggestions if input is empty
    if (!prefix) {
        suggestionsBox.innerHTML = '';
        suggestionsBox.classList.add('hidden');
        return;
    }
    
    const suggestions = trie.predictWords(prefix);
    renderSuggestions(prefix, suggestions);
});

// Render the dropdown items
function renderSuggestions(prefix, suggestions) {
    suggestionsBox.innerHTML = '';
    
    if (suggestions.length === 0) {
        suggestionsBox.classList.add('hidden');
        return;
    }

    suggestions.forEach(item => {
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        const prefixPart = item.word.substring(0, prefix.length);
        const restOfWord = item.word.substring(prefix.length);
        div.innerHTML = `<span class="highlight">${prefixPart}</span>${restOfWord}`;
        
        // Extension: Click to use word
        div.addEventListener('click', () => {
            trie.useWord(item.word);
            searchInput.value = item.word;
            suggestionsBox.classList.add('hidden');
            showMessage(`Used '${item.word}' (Frequency is now ${trie._getPrefixNode(item.word).freq})`, false);
        });

        suggestionsBox.appendChild(div);
    });

    suggestionsBox.classList.remove('hidden');
}
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-section')) {
        suggestionsBox.classList.add('hidden');
    }
});