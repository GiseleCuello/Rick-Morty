import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../Redux/Actions";
import style from "./Favorites.module.css";


function Favorites() {

  const myFavorites = useSelector (state => state.myFavorites);

  const dispatch = useDispatch();
  const[aux, setAux] = useState(false);
  
  const handleOrder = (event) =>{
    setAux(!aux);
    dispatch(orderCards(event.target.value))

  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  }
  const optionGender = ["Male" , "Female", "unknow", "Genderless", "All"]
  return (
    <div>
        <select className={style.select} onChange={handleOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select className={style.select} onChange={handleFilter}>
          {optionGender.map(option => 
            <option key={option} value={option}>{option}</option>

          )}
          
          
        </select>
  
    <div>
      {myFavorites.map(({ name, status, species, gender, origin, image, id }) => (
        <Card
          key={id}
          id={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          origin={origin}
          image={image}
        />
          ))}
    </div>
</div>
  );
}


// export function mapStateToProps(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

export default Favorites;