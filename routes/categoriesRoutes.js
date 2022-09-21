const CategoriesController = require('../controllers/categoryController');
const passport = require('passport')
module.exports = (app, upload) => {

    
    // GUARDAR DATOS
    app.post('/api/categories/create', passport.authenticate('jwt',{session: false}),upload.array('image', 1), CategoriesController.create);
 
     // GUARDAR DATOS
     app.get('/api/categories/getAll',  passport.authenticate('jwt',{session: false}), CategoriesController.getAll);
 

     
}