const URL = 'https://rickandmortyapi.com/api/character/'

const getAllCharacters = (req, res) => {

	fetch(URL)
		.then(resp => resp.json())
		.then(data => res.status(200).json(data.results))
		.catch(err => res.status(500).send('La petición ha fallado'))

}

module.exports = getAllCharacters