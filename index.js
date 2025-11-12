import express from 'express'
const app = express()
app.use(express.json());

const herois = ["Mulher Maravilha", "Super Man", "Homem de Ferro"]

app.get('/herois', (req, res) => {
    res.send(herois)
})

app.get('/herois/:id', (req, res) => {
    const id = req.params.id
    res.send(herois[id - 1])
})

app.post('/inserir', (req, res) => {
  const heroi = req.body.nome
  herois.push(heroi);
  res.send(heroi)
});

app.listen(3000)