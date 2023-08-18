import style from './AboutText.module.css'
const AboutText = () => {
    return(
        <div>
            <h1 className={style.titulo}>¡Bienvenidos al mundo de Rick & Morty!</h1>

       

        <div className={style.contenedor}>
        

        <div className={style.pag}>
            <h2>Sobre esta página</h2>

            <p>Sumérgete en el fascinante universo de la serie mientras exploras nuestra colección de personajes. Mediante un número de identificación único, que abarca del 1 al 826, podrás buscar y descubrir a tus personajes favoritos. </p>
            <p>Desde los excéntricos científicos hasta los coloridos habitantes de distintas dimensiones, esta página te brinda una experiencia de entretenimiento única para aprender sobre los personajes de Rick and Morty.</p>
            
            <p>¡Explora y disfruta de este increíble viaje!</p>

        </div>
        <div className={style.yo}>
            <h2>Sobre mi</h2>

            <p>Soy Gisele, estudiante del bootcamp de Henry para ser en un futuro cercano Full Stack Developer.</p>
            <p>Si queres conocer más sobre mi, te invito a seguirme.</p>
        </div>
        </div>
        </div>
    )
}

export default AboutText;