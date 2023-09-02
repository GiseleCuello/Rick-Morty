  import SearchBar from "../SearchBar/SearchBar";
  import Style from './Nav.module.css'
  import { Link, useNavigate} from "react-router-dom";


  export default function Nav({ onSearch, handleLogOut }) {

    const navigate = useNavigate();
    const logout = () => {
      handleLogOut();
      navigate('/');
    };
    
    return (
      <nav className={Style.SearchBar}>
        <SearchBar onSearch={onSearch} />
        <div className={Style.buttonsContainer}>
          <Link className={Style.link} to="/Home">
          <button className={`${Style.Btn} ${Style['glow-on-hover']}`}>Home</button>
          </Link>
          <Link className={Style.link} to="/About">
          <button className={`${Style.Btn} ${Style['glow-on-hover']}`}>About</button>
          </Link>
            <Link className={Style.link} to="/Favorites">
              <button className={`${Style.Btn} ${Style['glow-on-hover']}`}>
                <div>Favorites</div>
              </button>
            </Link>
            <Link className={Style.link}>
              <button className={`${Style.Btn} ${Style['glow-on-hover']}`} onClick={logout}>
                <div>Logout</div>
              </button>
            </Link>
          </div>
      </nav>
    );
  }