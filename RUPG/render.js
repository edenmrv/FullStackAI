function Renderer() {
    function properCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function renderAll(data) {
        renderHeader(data.mainUser);
        renderQuote(data.quote);
        renderPokemon(data.pokemon);
        renderAbout(data.about);
        renderFriends(data.friends);
    }
    
    function renderHeader(user) {
        $("#profile-header").html(`
            <img src="${user.picture}" alt="profile picture">
            <div>
                <h2>${user.firstName} ${user.lastName}</h2>
                <p>${user.city}, ${user.state}</p>
            </div>
        `);
    }

    function renderQuote(quote) {
        $("#quote-section").html(`
            <p class="quote-label">Favorite quote:</p>
            <p class="quote-text">"${quote}"</p>
            <p class="quote-author">-Kanye West</p>
        `);
    }

    function renderPokemon(pokemon) {
        $("#pokemon-section").html(`
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <p>Favorite Pokemon: ${properCase(pokemon.name)}</p>
        `);
    }

    function renderAbout(text) {
        $("#about-section").html(`
            <h3>About me</h3>
            <p>${text}</p>
        `);
    }

    function renderFriends(friends) {
        var friendsHTML = friends.map(function(name) {
            return `<p class="friend">${name}</p>`;
        }).join("");

        $("#friends-section").html(`
            <h3>Friends</h3>
            ${friendsHTML}
        `);
    }

    function renderError(message) {
        $("#main-content").html(`
            <p class="error">Something went wrong: ${message}</p>
        `);
    }

    return { renderAll, renderError };
}