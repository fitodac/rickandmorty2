const URL = 'https://rickandmortyapi.com/api/character/'

const getCharDetails = async (req, res) => {
	const params = req.params

	await fetch(URL + params.id)
		.then(resp => resp.json())
		.then(data => {
			const { 
				id, 
				image, 
				name, 
				gender, 
				status, 
				origin, 
				species
			} = data

			res.status(200).json({
				id, 
				image, 
				name, 
				gender, 
				status, 
				origin, 
				species
			})
			
		})
		.catch(err => {
			res.set('Content-Type', 'text/plain')
			res.status(500).send('La petición ha fallado')
		})
}

module.exports = getCharDetails