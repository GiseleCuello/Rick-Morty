import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./Action-types"
import axios from 'axios'



export const addFav = (character) => {
   return async (dispatch) => {
      try{
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      const {data} = await axios.post(endpoint, character)

      dispatch({
         type: ADD_FAV,
         payload: data,
         })
      }
      catch (error) {
         console.error("Error adding favorite:", error);
      }
   }
}

                         

export const removeFav = (id) => {
   return async (dispatch) => {
      try{
         const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
         const {data} = await axios.delete(endpoint)
         dispatch({
            type: REMOVE_FAV,
            payload: data,
         })
      }
      catch (error) {
         console.error("Error delete favorite:", error);
      }
   }
}      

export const filterCards = (gender) => {
    return{
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (order) => {
    return{
        type: ORDER,
        payload: order,
    }
}