import express from 'express'
const app = express()
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/teste', (req, res) => {
    res.send('testado')
})

app.listen(3000)