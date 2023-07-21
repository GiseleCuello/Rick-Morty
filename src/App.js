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

  

    const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
       console.log(data) 
       setCharacters([...characters, data])})
      .then(() => {console.log(characters)})
        .catch((err) => window.alert(err));
    };
    
    const onClose = (id) => {     
      setCharacters(characters.filter(char => char.id !== id))
      }
   
      //const shouldShowNav = window.location.pathname !== '/'; {shouldShowNav && <Nav onSearch={onSearch} />}

      const navigate = useNavigate();
      const [access, setAccess] = useState(false);
      const EMAIL = 'gisele@mail.com';
      const PASSWORD = 'gisele1305';
      
      
useEffect(() => {
   !access && navigate('/');
}, [access, navigate]);

function Login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/Home'); 
   }else{
      return alert('Ususario o contraseña incorrecta')
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
            <Route path='/' element={<Landing Login={Login}/>}></Route>
            <Route path='/Favorites' element={<Favorites />}></Route>

         </Routes>
         
         
      </div>
   );
}



export default App;
