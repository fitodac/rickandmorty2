const favorites = []

const getFavorites = (req, res) => {
	res.json(favorites)
}


const setFavorite = (req, res) => {
	favorites.push(req.body)
	res.status(201).json(req.body)
}


const deleteFavorite = (req, res) => {
	const _idx = favorites.findIndex(e => e.id === Number(req.params.id))
	const _fav = favorites[_idx]
	favorites.splice(_idx, 1)

	res.status(200).json(_fav)
}


module.exports = {
	getFavorites,
	setFavorite,
	deleteFavorite
}