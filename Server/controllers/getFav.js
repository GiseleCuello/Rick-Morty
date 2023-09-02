const { Favorite } = require("../src/DB_connection");

const getFav = async (req, res) => {
  try {
    const listaFav = await Favorite.findAll();
    res.status(200).json(listaFav);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getFav;
