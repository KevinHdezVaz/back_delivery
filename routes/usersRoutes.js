const UsersController = require('../controllers/usersController');
const passport = require('passport')
module.exports = (app, upload) => {

    // TRAER DATOS
    app.get('/api/users/getAll', UsersController.getAll);

    // GUARDAR DATOS
    app.post('/api/users/create', UsersController.register);
    app.post('/api/users/login', UsersController.login);

    // ACTUALIZAR DATOS                     //enviar token de 
    app.put('/api/users/update', passport.authenticate('jwt',{session: false}), upload.array('image', 1), UsersController.update);
//datos sini iamgen
    app.put('/api/users/updatewithoutImage',  passport.authenticate('jwt',{session: false}), UsersController.updatewithoutImage);

}