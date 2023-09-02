const { Favorite } = require('../src/DB_connection')

const deleteFav = async (req, res) => {
    const {id} = req.params
    try{
        const exFav = await Favorite.findOne({ where: { id } });
        await exFav.destroy();
        const listaFavs = await Favorite.findAll();
        res.status(200).json(listaFavs);
        // await Favorite.destroy({where : {id}})
        //const allFavs = await Favorite.findAll()
        //res.status(200)....
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = deleteFav;