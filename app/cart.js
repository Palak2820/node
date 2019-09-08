const Sequelize = require('sequelize');

const sequelze =require('../util/database');


const Cart = sequelize.define('cartItem',{
    id :{
        type:Sequelize.STRING,
        autoincrement:true,
        allowNull:false,
        primaryKey:True
    },
    quantity:Sequelize.INTEGER
});


module.exports =CartItem;