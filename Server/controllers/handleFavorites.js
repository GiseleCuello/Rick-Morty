let myFavorites = [];

const postFav = (req,res) => {
    // let {id} = req.body
    // const findRepeat = myFavorites.find(char => char.id === id)
    // if(findRepeat){
    //     return res.status(400).json("El personaje ya está en favoritos")
    // }
    myFavorites.push(req.body)
    res.json(myFavorites)
} // ver si vienen repetidos con .find

const deleteFav = (req, res) => {
   const {id} = req.params; // siempre viene string
   const filtered = myFavorites.filter(fav => fav.id !== Number(id))
   myFavorites = filtered
   res.json(myFavorites)
}



module.exports = { postFav, deleteFav, myFavorites};