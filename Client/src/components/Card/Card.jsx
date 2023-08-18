import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../Redux/Actions";




function Card({name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites, id]);

const handleFavorite = () => {
   if(isFav){
      setIsFav(false)
      removeFav(id)
   } else {
      setIsFav(true)
      addFav({name, status, species, gender, origin, image, id})
   }
}


   return (
      <div className={style.contenedor}>
         {onClose && <button className={style.btnClose} onClick={() => onClose(id)}>X</button>} 
         {
   isFav ? (
      <button className={style.btn} onClick={handleFavorite}>❤️</button>
   ) : (
      <button className={style.btn} onClick={handleFavorite}>🤍</button>
   )
}
         <img className={style.imagen} src={image} alt='' />     
         <Link to={`/Detail/${id}`} className={style.Link}>
         <h2 className={style.nombreEncima}>{name}</h2>
         </Link>           
         <h2 hidden className={style.nombre}>Specie: {species}/</h2>        
         <h2 hidden className={style.nombre}> Status: {status}</h2>
         <h2 hidden className={style.nombre}>Origin: {origin}</h2>
         <h2 hidden className={style.nombre}>Gender: {gender}</h2>
      </div>
   );
}



export function mapDispatchToProps (dispatch){
   return{
      addFav: function(character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);