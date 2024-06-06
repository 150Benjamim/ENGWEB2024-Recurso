Configuração Inicial:

Após examinar o arquivo JSON fornecido, fiz ajustes para garantir a compatibilidade com o MongoDB. Em particular, alterei o parâmetro "Id" para "_id" para evitar a criação de um novo identificador pelo MongoDB. Também modifiquei as strings para listas correspondentes.

Para importar o arquivo JSON para o MongoDB, comecei copiando o arquivo para a pasta tmp do contêiner do MongoDB usando o comando:

```
docker cp livros.json mongoEW:/tmp
```

Em seguida, importei o arquivo para o banco de dados "livros" e a coleção "livros" com o comando:

```
docker exec mongoEW mongoimport -d livros -c livros /tmp/plantas.json --jsonArray
```

Para verificar se o banco de dados foi criado e a coleção foi preenchida com os dados do arquivo JSON, utilizei os seguintes comandos:

```
docker exec -it mongoEW mongosh
show dbs
use livros
db.livros.find()
```

Desenvolvimento da API de Dados:

Para criar a API, utilizei o Express Generator com o comando:

```
npx express-generator --no-view ex1
```

Na pasta "bin", no arquivo "www", alterei a porta para 17000.

Criei as pastas "models" e "controllers", onde ficarão os arquivos com as funções para acessar os dados.

No arquivo "app.js", adicionei o código para criar a conexão com o MongoDB:

```javascript
var mongoose = require("mongoose");
var mongoDB = "mongodb://127.0.0.1/livros";
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão ao MongoDB"));
db.once("open", () => {
  console.log("Conexão ao MongoDB realizada com sucesso");
});
```

Para executar a API, é necessário primeiro instalar as dependências com os comandos:

```
npm i mongoose --save
npm i --save
```

Após instalar as dependências, a API pode ser executada com o comando:

```
npm start
```

Desenvolvimento da Interface:

Para criar a interface, usei o Express Generator com o comando:

```
npx express-generator --view=pug ex2
```

Na pasta "bin", no arquivo "www", alterei a porta para 17001.

Criei as páginas Pug para listar as plantas em uma tabela, outra para exibir informações sobre a planta e outra para mostrar as plantas de uma determinada espécie.

Adicionei as rotas para as páginas criadas.

Para executar a interface, é necessário primeiro instalar as dependências com os comandos:

```
npm i --save
npm i axios --save
```

Após instalar as dependências, a interface pode ser executada com o comando:

```
npm start
```
