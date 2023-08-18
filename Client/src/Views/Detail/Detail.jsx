
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import style from './Detail.module.css'
import { PiArrowBendDownLeftBold } from "react-icons/pi";

const Detail = () => {
    const {id} = useParams()

    const [characterDetail, setCharacterDetail] = useState({})
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacterDetail(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacterDetail({});
     }, [id]);


    return(
        <div >
            {characterDetail ? (
                <div className={style.contenedor}>
      <h2 className={style.nombre}>{characterDetail.name}</h2>
      <div className={style.txt}>
      <h4> Status: {characterDetail.status}</h4>
      <h4> Specie: {characterDetail.species}</h4>
      <h4> Gender: {characterDetail.gender}</h4>
      <h4> Origin: {characterDetail.origin?.name}</h4>
      </div>
      <img className={style.imagen} src={characterDetail.image} alt="" />
      <Link className={style.Link} to="/Home" ><PiArrowBendDownLeftBold /></Link>
      </div>
    ) : <h3>Loading</h3>}
    </div>
    )
}

export default Detail;

// useEffect(() => {
//     fetch('https://rickandmortyapi.com/api/character/${id}')
//     .then((response) => response.json())
//     .then (data => ([data]))
//     }, [id]);