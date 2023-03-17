const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

const router = require('./network/routes')
app.use(express.json())


// CORS
/**
const whitelist = [
	'http://localhost:3000',
	'https://fitodac.github.io/'
]

const options = {
	origin: (origin, callback) => {
		if(whitelist.includes(origin) !== -1 || !origin){
			callback(null, true)
		}else{
			callback(new Error('no permitido'))
		}
	},
	optionsSuccessStatus: 200
}

app.use(cors(options))
*/


app.use(cors())
app.use(router)

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});