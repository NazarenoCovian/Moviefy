const S = require("sequelize")
const db = require("../database/db")

class User extends S.Model{}

User.init({
    email:{
        type: S.STRING,
        // allowNull:false,
        // validate:{
        //     isEmail:true
        // }
    },
    password:{
        type:S.STRING,
        // allowNull:false
    },
    token:{
        type:S.STRING,
        // allowNull:false
    }

},{sequelize:db, modelName:"user"})

module.exports = User