import { useNavigate } from "react-router-dom";
import AboutText from "../../components/About/AboutText"
import Style from "./About.module.css"
import imagen from "../../Assets/Gisele.jpeg"

const About = () => {
    const navigate = useNavigate();
    return( 
        <div className={Style.texto}>
        <AboutText></AboutText>
        <img className={Style.img} src={imagen} />
        
        </div>
    )
}

export default About;