const bycrypt = require('bycrypt')
const users = [{
    id:1,
    email:'abc@abc.com',
    password:bycrypt.hashSync('password',10)
}]
module.exports = users;