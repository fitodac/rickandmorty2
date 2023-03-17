const express = require('express')
const app = express()
const port = 3000
// const routerApi = require('./routes')

app.use(express.json()) // Es necesario para devolver JSON en las peticiones

app.get('/', (req, res) => {
    res.send('Inicio')
})

// routerApi(app)


app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})