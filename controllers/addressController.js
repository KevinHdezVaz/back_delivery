const Address = require('../models/address');
const Category = require('../models/category')
const storage = require('../utils/cloud_storage')

module.exports = {
    async create(req, res, next) {
        try {

            const address = req.body;
            const data = await Address.create(address)
            return res.status(201).json({
                success: true,
                message: 'La categoria se ha creado correctamente ',
                data: {
                    'id': data.id,
                }
            })
        } catch (error) {
            console.log('Error', error);
            return res.status(501).json({
                success: false,
                message: 'Error al crear la dirección',
                error: error
            });

        }
    }
,
async findbyUser(req, res, next) {
    try {

        const id_user = req.params.id_user;
        const data = await Address.findbyUser(id_user)

        return res.status(201).json( 
          data);

    } catch (error) {
        console.log('Error', error);
        return res.status(501).json({
            success: false,
            message: 'Error al crear la dirección',
            error: error
        });

    }
}
}