class CharactersApiHandler {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://ih-crud-api.herokuapp.com'
        })
    }

    //Sintaxis clásica con return
    // getAllCharacters() {
    //     return this.axiosApp.get("/characters")
    // }

    getAllCharacters = () => this.axiosApp.get("/characters")

    createCharacter = (info) => this.axiosApp.post("/characters", info)

    getOneCharacter = (id) => this.axiosApp.get(`/characters/${id}`)

    editOneCharacter = (id, info) =>
        this.axiosApp.put(`/characters/${id}`, info)

}




















// editCharacter = (id, info) => this.axiosApp.put(`/characters/${id}`, info)