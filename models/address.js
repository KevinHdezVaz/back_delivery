const db = require('../config/config');

const Address = {};

Address.findByUser = (id_user) => {

    const sql = `
    SELECT
        id,
        id_user,
        address,
        neightborhood,
        lat,
        lng
    FROM
        address
    WHERE
        id_user = $1
    `;

    return db.manyOrNone(sql, id_user)

}


Address.create= (category)  => { 

    const sql = `
    INSERT INTO address (
        id_user,
        address, 
        neightborhood,
        lat,
        lng,
        created_at,
        updated_at
    )
    VALUES ( 
        $1,$2,$3,$4,$5,$6,$7
    ) RETURNING id
    `;

    return db.oneOrNone(sql,[
        category.id_user,
        category.address,
        category.neightborhood,
        category.lat,
        category.lng,
        new Date(),
        new Date()
    ])
}

module.exports = Address;