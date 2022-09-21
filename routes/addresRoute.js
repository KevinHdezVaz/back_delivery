const AddresController = require('../controllers/addressController');
const passport = require('passport')

module.exports = (app) =>{
     app.post('/api/address/create', passport.authenticate('jwt',{session: false}),  AddresController.create);

     app.get('/api/address/findbyUser/:id_user', passport.authenticate('jwt',{session: false}) , AddresController.findbyUser);


}