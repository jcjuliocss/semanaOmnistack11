const express = require('express')
const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')

const routes = express.Router()

/**
 * Métodos HTTP:
 * 
 * get: busca informação do back-end
 * post: cria uma informação no back-end
 * put: altera uma informação no back-end
 * delete: deleta uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query: parâmetros nomeados enviados na rota após o "?"
  * Route: utilizados para identificar recursos
  * Request body: corpo da requisição, utilizado para criar ou alterar recursos
  */

routes.post('/sessions', sessionController.create)

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/profile', profileController.index)

routes.post('/incidents', incidentController.create)
routes.get('/incidents', incidentController.index)
routes.delete('/incidents/:id', incidentController.delete)

module.exports = routes
