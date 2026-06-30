// Ex 1
const fetchEx1 = async (isbn) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.items) {
            console.log(`[Ex1] Success! ISBN ${isbn}:`, data.items[0].volumeInfo.title);
        } else {
            console.log(`[Ex1] No data found for ISBN ${isbn}`);
        }
    } catch (error) {
        console.error("[Ex1] Error:", error.message);
    }
};
// Ex 2
const fetchEx2 = async (queryType, queryValue) => {
    const type = queryType === "title" ? "intitle" : queryType;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${type}:${queryValue}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.items) {
            console.log(`[Ex2] Found book for ${queryValue}:`, data.items[0].volumeInfo.title);
        } else {
            console.log(`[Ex2] No data found for ${queryValue}`);
        }
    } catch (error) {
        console.error("[Ex2] Error:", error.message);
    }
};

// Ex 3
const fetchEx3 = async (queryType, queryValue) => {
    const type = queryType === "title" ? "intitle" : queryType;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${type}:${queryValue}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (!data.items) {
            return console.log(`[Ex3] No books found for: ${queryValue}`);
        }

        console.log(`\n[Ex3] --- Results for: "${queryValue}" ---`);
        
        data.items.forEach((book, index) => {
            const info = book.volumeInfo;
            
            // Extracting data with fallbacks in case API data is missing
            const title = info.title || "Unknown Title";
            const author = info.authors ? info.authors.join(", ") : "Unknown Author";
            
            // Find the ISBN inside the industryIdentifiers array
            const isbnObj = info.industryIdentifiers?.find(id => id.type.includes("ISBN"));
            const isbn = isbnObj ? isbnObj.identifier : "N/A";
            
            console.log(`${index + 1}. Title: ${title} | Author: ${author} | ISBN: ${isbn}`);
        });
        
    } catch (error) {
        console.error("[Ex3] Error:", error.message);
    }
};

// Test 

const runAllTests = async () => {
    console.log("Testing Ex 1:");
    await fetchEx1("9780575087057"); 
    
    console.log("\nTesting Ex 2:");
    await fetchEx2("isbn", "9789814561778");
    await fetchEx2("title", "The Wise Man's Fears");
    
    console.log("\nTesting Ex 3:");
    await fetchEx3("title", "How to Win Friends and Influence People");
};

runAllTests();