import {useState} from "react";
import Style from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');
   
   const handleChange = (event) =>{
      setId(event.target.value);
    }
    
const handleSearch = (id) => {
   onSearch(id)
   setId('')
}   
   
return (
   <div className={Style.container}>
     <button className={Style.btn} onClick={() => handleSearch(id)}>Buscar</button>
     <input
       className={Style.input}
       value={id}
       id='inputSearch'
       type='search'
       placeholder="Ingresa un ID"
       onChange={handleChange}
     />
   </div>
 );
}








