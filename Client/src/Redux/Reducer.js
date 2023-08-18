import { REMOVE_FAV, ADD_FAV, FILTER, ORDER } from "./Action-types"

//const idRemove = parseInt(action.payload, 10); //action.payload: Es el valor que se desea convertir a un número. En este caso, action.payload contiene el ID del personaje que se quiere eliminar de la lista de favoritos.  10: Es el segundo argumento que se le pasa a parseInt() y representa la base numérica en la cual se encuentra el valor que se quiere convertir. En este caso, 10 indica que el valor en action.payload está en formato decimal (base 10).

const initialState = {
   
    myFavorites: [],
    allCharacters: [],
}

function rootReducer (state = initialState, action) {
    switch(action.type){
        case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };
    
      case REMOVE_FAV:        
      return { ...state, myFavorites: action.payload };
        

        case FILTER:
            const genderFilter = action.payload === "All" ? state.allCharacters : state.allCharacters.filter(char => char.gender === action.payload)
            return{...state, myFavorites: genderFilter};
        
        case ORDER:
            // return action.payload === "Ascendente" ? a.id - b.id : b.id - a.id
            
            const sortChar = [...state.allCharacters];
            sortChar.sort((a, b) => {
                return action.payload === "Ascendente" ? a.id - b.id : b.id - a.id
            
                });
                return{...state, myFavorites: sortChar};
        
        default:
            return state;
    }
}

export default rootReducer;