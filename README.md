## AXIOS

  - Axios es una librería que podemos emplear bien desde el cliente, usando su CDN. O desde un proyecto de npm, instalandolo previamente.
  - Nos permite hacer peticiones HTTP asíncronas sin recarga de página. 
  - Está gestionada mediante promesas.
  
### Uso básico

#### GET/DELETE

  ```js
      axios.get("URL")
        .then(response => console.log(response))
        .catch(err => console.log(err))
  ```

### POST/PUT

  ```js
      axios.post("URL", dataToSend)
        .then(response => console.log(response))
        .catch(err => console.log(err))
  ```

### Instanciando una URL base.

  ```js
    const axiosApp = axios.create( {baseURL: "URLBásica" })
    axiosApp.get("/final-del-endpoint")
  ```

  O con formato de clase...

  ```js
    this.axiosApp = axios.create( {baseURL: "URLBásica" })
    this.axiosApp.get("/final-del-endpoint")
  ```
