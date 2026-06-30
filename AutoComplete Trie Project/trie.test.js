const AutoCompleteTrie = require('./trie');

describe('AutoCompleteTrie', () => {
    let trie;

    beforeEach(() => {
        trie = new AutoCompleteTrie();
    });

    test('addWord and findWord basic functionality', () => {
        trie.addWord('cat');
        expect(trie.findWord('cat')).toBe(true);
        expect(trie.findWord('car')).toBe(false);
        expect(trie.findWord('ca')).toBe(false); // prefix exists, but not full word
    });

    test('predictWords returns correct words based on prefix', () => {
        trie.addWord('cat');
        trie.addWord('car');
        trie.addWord('dog');
        
        const suggestions = trie.predictWords('ca');
        expect(suggestions.length).toBe(2);
        
        // Map to get just the words for testing
        const words = suggestions.map(s => s.word);
        expect(words).toContain('cat');
        expect(words).toContain('car');
    });

    test('handles edge cases (case insensitivity and no matches)', () => {
        trie.addWord('Apple');
        
        // Case sensitivity check
        expect(trie.findWord('aPpLe')).toBe(true);
        
        // Unmatched prefix should return empty array, not break
        const noMatch = trie.predictWords('xyz');
        expect(noMatch).toEqual([]);
    });

    test('predictWords ranks by frequency (Bonus)', () => {
        trie.addWord('cat');
        trie.addWord('car');
        
        trie.useWord('cat');
        trie.useWord('cat');
        trie.useWord('car');
        
        const suggestions = trie.predictWords('ca');
        
        // 'cat' used 2 times, 'car' used 1 time
        expect(suggestions[0].word).toBe('cat');
        expect(suggestions[1].word).toBe('car');
    });
});