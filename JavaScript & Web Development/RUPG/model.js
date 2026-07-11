function UserModel() {
    var userData = null;

    function getRandomPokemonId() {
        return Math.floor(Math.random() * 1025) + 1;
    }

    function fetchAllData() {
        var userFetch = fetch("https://randomuser.me/api/?results=7").then(function(res) {
            return res.json();
        });

        var quoteFetch = fetch("https://api.kanye.rest/").then(function(res) {
            return res.json();
        });

        var pokemonFetch = fetch("https://pokeapi.co/api/v2/pokemon/" + getRandomPokemonId()).then(function(res) {
            return res.json();
        });

        var aboutFetch = fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text").then(function(res) {
            return res.text();
        });

        return Promise.all([userFetch, quoteFetch, pokemonFetch, aboutFetch]).then(function(results) {
            var users = results[0].results;

            userData = {
                mainUser: {
                    picture: users[0].picture.large,
                    firstName: users[0].name.first,
                    lastName: users[0].name.last,
                    city: users[0].location.city,
                    state: users[0].location.state
                },
                friends: users.slice(1).map(function(user) {
                    return user.name.first + " " + user.name.last;
                }),
                quote: results[1].quote,
                pokemon: {
                    name: results[2].name,
                    image: results[2].sprites.front_default
                },
                about: results[3]
            };

            return userData;
        });
    }

    function getData() {
        return userData;
    }

    return { fetchAllData, getData };
}