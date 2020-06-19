const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.send({ message: 'Tudo ok com o metodo GET!' })
})

app.listen(300)
module.exports = app