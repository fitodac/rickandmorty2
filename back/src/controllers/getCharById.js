const URL = 'https://rickandmortyapi.com/api/character/'

const getChatById = async (req, res) => {
	const params = req.params

	await fetch(URL + params.id)
		.then(resp => resp.json())
		.then(data => {
			const { 
				id, 
				image, 
				name, 
				gender, 
				species
			} = data

			res.status(200).json({
				id, 
				image, 
				name, 
				gender, 
				species
			})
			
		})
		.catch(err => res.status(500).send('La petición ha fallado'))

}

module.exports = getChatById