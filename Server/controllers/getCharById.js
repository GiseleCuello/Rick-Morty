
const axios = require ('axios');
const URL = "https://rickandmortyapi.com/api/character/"
//require('dotenv').config()
//const {URL} = process.env

const getCharById = async (req,res) => {
    try{
        const charId = req.params.id;
        const response = await axios (`${URL}${charId}`);
        const character = response.data;
        if(character){
            const { id, name, gender, species, origin, image, status } = character;
            res.json({ id, name, gender, species, origin, image, status })
        } else {
            res.status(404).json({message : 'Not found'})
        }
    } catch (error) {
        res.status(500).json({message: 'An error ocurred'})
    }
}



module.exports = getCharById;


