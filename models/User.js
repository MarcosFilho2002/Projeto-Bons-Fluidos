const conn = require('../db/conn')
class Users{
    constructor(email,senha,admin){
        this.email = email
        this.senha = senha
    }

    static logar(email,senha){

        const user = conn.db().collection('users').findOne(
            {
                email: email,
                senha: senha
            }         
        )
        return user;  
    }

    save(){

        const user = conn.db().collection('users').insertOne({
            email : this.email,
            senha: this.senha
        })
        return user;

    }

}

module.exports = Users