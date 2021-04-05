const bcrypt = require('bcrypt');
const User = require('../models/users');

class UserRepository{
    constructor(){

    }

    async findAll(){
        return await User.find();
    }

    async findaAllWithPagination(filter,{options}){
        return await User.paginate(filter, options);
    }

    async findById(id){
        return await User.findById(id);
    }

    async save(user){

        user.password = await bcrypt.hash(user.password,10);
        return await User.create(user);
    }

    async update(id,user){
        return await User.findByIdAndUpdate(id, user, {new: true});
    }

    async delete(id){
        return await User.findByIdAndRemove(id);
    }



}

module.exports = UserRepository ;