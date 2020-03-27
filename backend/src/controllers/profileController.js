connection = require('../database/connection')

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization

        const ong_incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')

        return response.json(ong_incidents)
    }
}