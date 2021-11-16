const apiHandler = new CharactersApiHandler()

//Cargar lista de personajes
function loadCharactersFromAPI() {

    apiHandler.getAllCharacters()
        .then(res => {
            const charactersUL = document.querySelector("#charactersList")
            console.log(res)

            let charactersInfo = ""
            res.data.reverse().forEach(character => {
                charactersInfo += `<li>Nombre: ${character.name} </br> Ocupación: ${character.occupation} </br> Arma: ${character.weapon}</li>`
            });

            charactersUL.innerHTML = charactersInfo
        })
        .catch(err => console.log(err))
}

loadCharactersFromAPI()


/////// Crear personaje
const newCharacterForm = document.querySelector("#newCharacterForm")

newCharacterForm.onsubmit = (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll("#newCharacterForm input")

    const name = inputs[0].value
    const occupation = inputs[1].value
    const weapon = inputs[2].value

    apiHandler.createCharacter({ name, occupation, weapon })
        .then(res => {
            newCharacterForm.reset()
            loadCharactersFromAPI()
        })
        .catch(err => console.log(err))
}


//////// Rellenar formulario de edición
const getCharacterInfoForm = document.querySelector("#getCharacterInfoForm")

getCharacterInfoForm.onsubmit = (e) => {
    e.preventDefault()

    const id = getCharacterInfoForm.querySelector("input").value

    apiHandler.getOneCharacter(id)
        .then(res => {
            const editInputs = document.querySelectorAll("#editCharacterForm input")

            editInputs[0].value = res.data.name
            editInputs[1].value = res.data.occupation
            editInputs[2].value = res.data.weapon
            editInputs[3].value = res.data.id

        })
        .catch(err => console.log(err))
}


/////// Editar personaje
const editCharacterForm = document.querySelector("#editCharacterForm")

editCharacterForm.onsubmit = (e) => {
    e.preventDefault()

    const editFormInputs = editCharacterForm.querySelectorAll("input")

    const name = editFormInputs[0].value
    const occupation = editFormInputs[1].value
    const weapon = editFormInputs[2].value
    const id = editFormInputs[3].value

    const info = { name, occupation, weapon }

    apiHandler.editOneCharacter(id, info)
        .then(res => {
            getCharacterInfoForm.reset()
            editCharacterForm.reset()
            loadCharactersFromAPI()
        })
        .catch(err => console.log(err))
}
