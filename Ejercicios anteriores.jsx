/*
Clase 2
index.js

    const {url} = req;
    const idRegex = /\/rickandmorty\/character\/(\d+)/; // Expresión regular para obtener el ID

    if (url.startsWith("/rickandmorty/character/")) {
        const match = url.match(idRegex);
        if(match){
            const id = parseInt(match[1], 10); //Cuando se utiliza un regex con un grupo de captura (entre parentesis) la coincidencia obtenida con match es un array que contiene dos elementos. El primer elemento (match[0]) es la cadena completa que coincide con la expresión regular (toda la URL) y el segundo elemento (match[1]) es el valor capturado por el grupo (\d+), que es el ID del personaje.
        
        
        let personaje = data.find((personaje) => personaje.id === id);
    if(personaje){
    res.writeHead(200, {"Content-Type": "application/json"})
    return res.end(JSON.stringify(personaje))
    } else {
        res.writeHead(200, {"Content-Type": "application/json"})
        return res.end(JSON.stringify({error:"character not found"}))
    }
    }
    };             

    res.writeHead(404);
    res.end();
})

-----------------------------------------------------------------------------------------------------------------

Clase 3
index.js

const http = require("http");
const getCharById = require("../controllers/getCharById")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const url = req.url;
    if (url.includes ("/rickandmorty/character/")){
        const id = Number(url.split("/").pop())
        
        if (isNaN(id)) {
            res.writeHead(400, {"Content-Type":"text/plain"});
            res.end("El id no es válido");
            return;
        }

        getCharById(res,id)
    }else{
        res.writeHead(404, {"Content -Type":"text/plain"});
        res.end("Ruta no válida")
    }
})
.listen(3001, "localhost", ()=>{})

/*
if (url.includes === ("/rickandmorty/character/")){
    const id = Number(url.split("/").pop())
}

getcharbyid
const axios = require("axios");

const successHandler = (response, res) => {
    const { id, name, gender, species, origin, image, status } = response.data;
    const charData = { id, name, gender, species, origin, image, status }; 
    res.writeHead(200, {'Content-Type':'application/json'}); 
    res.end(JSON.stringify(charData)); 
}

const errorHandler = (error, res) => {
    res.writeHead(500, {'Content-Type':'text/plain'}); 
    res.end(error.message); 
} 



const getCharById = (res, id) => {  
    const URL = `https://rickandmortyapi.com/api/character/${id}`;

    axios 
    .get(URL)
    .then(response => successHandler(response, res))
    .catch(error => errorHandler(error, res))
            
}

module.exports = getCharById

//res es un objeto de respuesta HTTP para enviar una respuesta al cliente que realizó la solicitud, y id es el identificador del personaje que queremos obtener.
// Si la solicitud se resuelve correctamente (es decir, la promesa se cumple), se extraen los datos relevantes de la respuesta, como el id, name, gender, species, origin, image, y status. Luego, se crea un objeto charData con estos datos.
//si la solicitud se rechaza (es decir, ocurre un error en la promesa), el código en el bloque .catch() se ejecuta.

export const removeFav =(id) => {
    return {
        type:  REMOVE_FAV,
        payload: id
    }
}

--------------------------------------------------------------------------------------------------------------------
Clase 5 Express

const getCharById = (req, res) => {

    const {id} = req.params
    axios(`${URL}${id}`)
    .then(({data}) => {
            const { id, name, gender, species, origin, image, status } = data;
            const character = { id, name, gender, species, origin, image, status }
               name? res.status(201).json(character)
               : res.status(404).json({message: 'Not found'}) 
               })  
    .catch(error => {
        res.status(500).json({message: error})
            })
        }


        App
    function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios( `${URL}?email=${email}&password=${password}`)
   .then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate('/Home');
   })
   .catch(error => alert(error))
}

const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
          if (!characters.find((char) => char.id === data.id)) {
            if (data.name) {
              setCharacters((oldCharacters) => [...oldCharacters, data]);
            }
          } else {
            window.alert(`Ya existe un personaje con el id ${id}`);
          }
        })
        .catch((err) => alert(err.response.data));
    };

    
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
};

export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
      });
      });
   };
};
*/
