const express = require('express')
const router = express.Router()

const getCharById = require('../controllers/getCharById')
const getAllCharacters = require('../controllers/getAllCharacters')
const getCharDetails = require('../controllers/getCharDetails')
const {
	getFavorites,
	setFavorite,
	deleteFavorite
} = require('../controllers/favorites')

router.get('/', (req, res) => {
	res.json({ api: 'rickandmorty' })
})

router.get('/all', 						getAllCharacters)
router.get('/onsearch/:id', 	getCharById)
router.get('/details/:id', 		getCharDetails)
router.get('/fav', 						getFavorites)
router.post('/fav', 					setFavorite)
router.delete('/fav/:id', 		deleteFavorite)


module.exports = router