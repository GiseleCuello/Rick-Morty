import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Reducer' // Importa el reducer principal que combina todos los reducers

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Crea el store con el reducer principal

export default store;


