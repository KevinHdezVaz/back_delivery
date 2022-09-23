const OrderController = require('../controllers/OrdersController');
const passport = require('passport')

module.exports = (app) =>{

    /*
    * GET ROUTES
    */
    app.get('/api/orders/findByStatus/:status', passport.authenticate('jwt', {session: false}), OrderController.findByStatus);
    app.get('/api/orders/findByClientAndStatus/:id_client/:status', passport.authenticate('jwt', {session: false}), OrderController.findByClientAndStatus);
  
     /*
     * POST ROUTES
     */
    app.post('/api/orders/create', passport.authenticate('jwt', {session: false}), OrderController.create);
  
   }