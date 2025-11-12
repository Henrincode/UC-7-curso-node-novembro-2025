# Iniciando o projeto

```bash
npm init
```

- package name: `nome padrão da pasta`
- version: `padrão 1.0.0`
- description: `Primeiro projeto em Node.JS`
- entry point: `padrão index.js`
- test command: `vazio por padrão`
- git repository: `deixar caminho padrão`
- keywords: `vazio por padrão`
- author: `Henrique Marques`
- license: `MIT`

# Testar se esta rodando o código no node

```bash
node index.js
```

# Criar atalho para scripts

 - No arquivo `package.json` logo depois de:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
```
- Coloque virgula depois do comando `test` e na linha de baixo insira `"atalho": "comando"` ficando assim:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
},
```

- Rodando o atalho

```bash
npm start
```

Para parar o servidor é só pressionar `ctrl + c` no terminal

- Instalando express

```bash
npm i express
```

- Importar o express

```js
import express from 'express'
const app = express()
```

- Criando rotas

```js
import express from 'express'
const app = express()
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/oi', (req, res) => {
    res.send('Olá, mundo!')
})

app.listen(3000)
```

- Instalando nodemon

```bash
npm i --save-dev nodemon
```

- Configurando nodemon no package json

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index" // insira esta linha
},
 ```

- Startando nodemon npm run dev

```bash
npm run dev
```

- Rodando o atalho

```bash
npm start
```

Para parar o servidor é só pressionar `ctrl + c` no terminal

- Instalando express

```bash
npm i express
```

- Importar o express

```js
import express from 'express'
const app = express()
```

- Criando rotas

```js
import express from 'express'
const app = express()
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/oi', (req, res) => {
    res.send('Olá, mundo!')
})

app.listen(3000)
```

- Instalando nodemon

```bash
npm i --save-dev nodemon
```

- Configurando nodemon no package json

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index" // insira esta linha
},
 ```

- Startando nodemon npm run dev

```bash
npm run dev
```

- E no terminal digite:

```bash
npm start
```
