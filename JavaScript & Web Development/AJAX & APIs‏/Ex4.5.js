const fetchCatGif = async () => {
    const API_KEY = "YOUR_API_KEY_HERE"; 
    const searchTerm = "cats";
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=1`;
    
    try {
        const response = await fetch(url);
        const result = await response.json();
        const embedUrl = result.data[0].embed_url;
        const iframe = document.createElement("iframe");
        iframe.src = embedUrl;
        iframe.width = "480";
        iframe.height = "360";
        iframe.frameBorder = "0";
        
        const container = document.getElementById("gif-container");
        container.innerHTML = ""; // Clear the "Loading..." text
        container.appendChild(iframe);
        
    } catch (error) {
        console.error("Failed to fetch GIF:", error.message);
        document.getElementById("gif-container").innerText = "Failed to load GIF.";
    }
};

fetchCatGif();

// Ex 5 

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const gifContainer = document.getElementById("gif-container");
const API_KEY = "YOUR_API_KEY"; 

searchBtn.addEventListener("click", async () => {
    const searchTerm = searchInput.value.trim();
    
    if (!searchTerm) {
        return alert("Please enter a search term!");
    }
    gifContainer.innerHTML = "Loading...";
    const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=1`;

    try {
        const response = await fetch(url);
        const result = await response.json();

        if (result.data.length === 0) {
            gifContainer.innerHTML = "No GIFs found for this search.";
            return;
        }

        const embedUrl = result.data[0].embed_url;
        
        gifContainer.innerHTML = `
            <iframe 
                src="${embedUrl}" 
                width="480" 
                height="360" 
                frameBorder="0">
            </iframe>
        `;
        
    } catch (error) {
        console.error("Failed to fetch GIF:", error);
        gifContainer.innerHTML = "Failed to load GIF. Check your API key or connection.";
    }
});