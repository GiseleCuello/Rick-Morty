const express = require ('express')
const router = express.Router()
const getCharById = require ('../controllers/getCharById')
const login = require ('../controllers/Login')
const deleteFav = require ('../controllers/DeleteFav')
const postFav = require ('../controllers/PostFav')
const postUser = require('../controllers/postUser')
const getFav = require('../controllers/getFav')




router.get("/character/:id", getCharById)
router.post("/login", postUser)
router.get("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)
router.get("/fav", getFav)

module.exports = router