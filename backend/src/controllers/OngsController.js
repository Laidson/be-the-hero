const crypto = require('crypto');
const connection = require('../database/connection');
 
/**
 * Exportar um objeto com os métodos a serem usados
 */
module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs); 
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;
     /**console.log(data); // PRecisa disso p/ devolver o JSON pelo npm start (nodemon)*/
    
        const id = crypto.randomBytes(4).toString('HEX');/* vem da documentação do node*/

     /**Conexção com o banco de dados
     O await vai fazer com que aguarde o prenchimento da função abaixo para continuar*/
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};

