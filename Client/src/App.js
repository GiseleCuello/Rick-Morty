import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Routes , useNavigate, useLocation} from 'react-router-dom';
import About from './Views/About/About';
import Detail from './Views/Detail/Detail';
import Landing from './Views/Landing/Landing';
import Favorites from './components/Favorites/Favorites';

function App() {
   const[characters, setCharacters] = useState([]);


     const onSearch = async (id) => {
      try{
         const URL = 'http://localhost:3001/rickandmorty/character/'
         const {data} = await axios(`${URL}${id}`)
         if (!characters.find((char) => char.id === data.id)) {
            if (data.name) {
              setCharacters((oldCharacters) => [...oldCharacters, data]);
            }
          } else {
            window.alert(`Ya existe un personaje con el id ${id}`);
            }
      }
        catch(error) {
          alert(error.response.data);                      
        }
      }
    
    const onClose = (id) => {     
      setCharacters(characters.filter(char => char.id !== id))
      }

     
   
      //const shouldShowNav = window.location.pathname !== '/'; {shouldShowNav && <Nav onSearch={onSearch} />}

      const navigate = useNavigate();
      const [access, setAccess] = useState(false);
      
      
      
useEffect(() => {
   !access && navigate('/');
}, [access, navigate]);



const login = async (userData) => {
   try{
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios( `${URL}?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(access);
      access ? navigate('/Home') : alert("Usuario o contraseña incorrectos");
      } 
   catch (error){
       alert(error)
      }
   }



function handleLogOut  () {
   setAccess(false);
   navigate('/')
 }

// Obtener la ubicación actual
const location = useLocation();

// Verificar si estamos en la página de inicio
const isHome = location.pathname === '/';

   return (
      <div className='App'>
         
        
         {!isHome && <Nav onSearch={onSearch} handleLogOut={handleLogOut} />}
         <Routes>
            <Route path="/About" element={<About />}></Route>
            <Route path='/Home'  element={<Cards characters={characters} onClose={onClose}/>}></Route>
            <Route path='/Detail/:id' element={<Detail/>}></Route>
            <Route path='/' element={<Landing Login={login}/>}></Route>
            <Route path='/Favorites' element={<Favorites />}></Route>

         </Routes>
         
         
      </div>
   );
}



export default App;
