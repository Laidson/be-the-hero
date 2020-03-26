const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count()

        /*console.log(count);*/

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        
        response.header('X-Total-Count', count['count(*)']);/* da a contagem de registros p/ o frontend*/

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        /* para ter certeza de que quem esta deletando foi o id q criou fazemos essa busca p/ confirmar */
        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        if (incidents.ong_id !== ong_id) {
            return response.status(401).json({ erro: 'Operations not permited.'});
            // 401 http status de não aturorizado
        }

        await connection('incidents').where('id', id).delete();
            //status 204 'No Content', vai sair p/ frontchange
        return response.status(204).send();

        
    }
};

