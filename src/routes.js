const {Router} = require('express')
const ProductController = require('./controllers/ProductController')
const routes = Router()

routes.get('/products' , ProductController.index)
routes.get('/products/:id' , ProductController.show)
routes.put('/products/:id' , ProductController.update)
routes.post('/products' , ProductController.store)
routes.delete('/products/:id', ProductController.destroy)

module.exports = routes;