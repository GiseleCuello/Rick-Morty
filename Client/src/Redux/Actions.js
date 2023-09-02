import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_FAV, LOGIN, LOG_OUT } from "./Action-types"
import axios from 'axios'



export const addFav = (character) => {
   return async (dispatch) => {
     try {
       const response = await axios.post(
         "http://localhost:3001/rickandmorty/fav",
         character
       );
       const data = response.data;
       console.log(data);
       return dispatch({
         type: ADD_FAV,
         payload: data,
       });
     } catch (error) {
       console.log(error);
     }
   };
 };

                         

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

export const getFav = () => {
   return async (dispatch) => {
     try {
       const endpoint = `http://localhost:3001/rickandmorty/fav`;
       const { data } = await axios.get(endpoint);
 
       console.log("Prueba error:", data);
       return dispatch({
         type: GET_FAV,
         payload: data,
       });
     } catch (error) {
       console.log(error);
     }
   };
 };

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

export const loginState = (email, password) => {
   return async (dispatch) => {
     try {
       const URL = "http://localhost:3001/rickandmorty/login/";
       const { data } = await axios(
         `${URL}?email=${email}&password=${password}`
       );
       const { access } = data;
       return dispatch({
         type: LOGIN,
         payload: access,
       });
     } catch (error) {}
   };
 };

export const logOut = () => ({
   type: LOG_OUT,
});