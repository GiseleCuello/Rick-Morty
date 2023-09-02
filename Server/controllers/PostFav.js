const { Favorite } = require('../src/DB_connection')

const postFav = async (req, res) => {

  const{ name, origin, status, image, species, gender} = req.body

    try{       
      //if(![name, origin, status, image, gender, species].every(Bollean)) return res.status(401)....... 
        if( !name || !origin || !status || !image || !species || !gender){
             res.status(401).json({message: "Faltan datos"})
        } else {

        const [favorite, created] = await Favorite.findOrCreate({
             where: { name },
        defaults: { status, image, species, gender },
      });
        
        if (created) {
            const allFavs = await Favorite.findAll();
            res.status(200).json(allFavs);
          } else {
            res
              .status(409)
              .json({ message: "¡Este personaje ya existe!", favCharacter });
          }
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
module.exports = postFav;