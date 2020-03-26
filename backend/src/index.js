const express = require('express');
const routes = require('./routes'); 
/**
 * tem que se usar o ./ para indicar o arquivo
 * quando indica um pacote como o caso do express
*/

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);// precisar vir abaixo da chamada do json

/**requisição do formato json p/ q o sistema entenda
 */ 



/**
 * //useres é o recurso que qer ser acessado
 */
/**
 * Método HTTP:
 * 
 * GET: Buscar uma informação do back-end (É sempre executado pelo browser)
 * POST:Criar uma infromação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end  
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query params: parÂmetros nomeados enviados na rota após o "?" 
  *     geralemte servem para: filtos, paginação...) ex: /users?nome=Diego
  *     Para acessar o query: const parrms =request.query    
  * 
  * Route params: ParÂmetros utilizados para identificar recursos 
  *     (app.get('/users/:id'), sendo o "/:id" a parte que identifica
  *     
  *  
  * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
  * Para acessar const body = request.body;
  */

 /**
  * Tipos de Bando de Dados:
  * SQL- mais utilizado no mercado e mis flexivel de estrutura
  * SQL: mySQL,SQLLite, PostgreSQL, Oracle, Microsoft SQL server
  * NoSQL: MongoSB, CouchDB, etc
  */
 
/**
 * Driver: SELECT * FROM users
 * Query Biulder: table('user').select('*').where()
 */




app.listen(3333);

