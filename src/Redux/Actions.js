import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./Action-types"

export const addFav = (payload) => {
    return{
        type: ADD_FAV,
        payload,
    }
}

export const removeFav = (payload) => {
    return{
        type: REMOVE_FAV,
        payload,
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