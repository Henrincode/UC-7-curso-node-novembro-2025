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

- E no terminal digite:

```bash
npm start
```
