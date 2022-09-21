const ProductsController = require('../controllers/productsControllers');
const passport = require('passport')

module.exports = (app,upload) =>{
    app.post('/api/products/create', passport.authenticate('jwt',{session: false}),upload.array('image', 3), ProductsController.create);


    app.get('/api/products/findCategory/:id_category', passport.authenticate('jwt',{session: false}) , ProductsController.findbyCategory);

}