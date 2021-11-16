// `https://pokeapi.co/api/v2/pokemon/ditto`


const searchButton = document.querySelector("#submit-button")

searchButton.onclick = () => {
    const searchInput = document.querySelector("#my-searchbar")
    const name = searchInput.value
    getPokemon(name)
}



function getPokemon(name) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            // Here we can do something with the response object
            console.log("La respuesta de nuestra API: ", response.data)
            const pokemonNameParagraph = document.querySelector("#pokemon-name")
            const pokemonNumberParagraph = document.querySelector("#pokedex-number")

            pokemonNameParagraph.innerHTML = response.data.name
            pokemonNumberParagraph.innerHTML = response.data.id

        })
        .catch(err => {
            // Here we catch the error and display it
            console.log({ err })
            const warningParagraph = document.querySelector(".text-danger")
            warningParagraph.innerHTML = err.response.data
        });
}
