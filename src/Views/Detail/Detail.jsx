import Card from "../../components/Card/Card"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const Detail = () => {
    const {id} = useParams()

    const [characterDetail, setCharacterDetail] = useState({})
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacterDetail(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacterDetail({});
     }, [id]);


    return(
        <div>
            {characterDetail ? (
                <div>
      <h2>Nombre: {characterDetail.name}</h2>
      <h4> {characterDetail.status}</h4>
      <h4> {characterDetail.species}</h4>
      <h4> {characterDetail.gender}</h4>
      <h4> {characterDetail.status}</h4>
      <h4> {characterDetail.origin?.name}</h4>
      <img src={characterDetail.image} alt="" />
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