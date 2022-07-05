const Users = require('./User.model');
const user = {

    get: async(req, res)=>{
        const { id } = req.params;
        const user = await Users.findOne({ _id:id });
        res.status(200).send(user);
    },

    list: async(req, resp)=>{
        const users = await Users.find(); 
        resp.status(200).send(users);
    },

    create: async(req, res)=>{
        const user = new Users(req.body);
        const saveUser = await user.save();
        res.status(201).send( saveUser._id);
    },

    update: async(req, res)=>{
        const { id } = req.params;
        const user = await Users.findOne({ _id: id });
        Object.assign(user, req.body),
        await user.save();
        res.sendStatus(204);
    },

    destroy: async(req, res)=>{
        const { id } = req.params;
        const user = await Users.findOne({ _id: id });
        user? await user.remove():'No existe el usuario'; 
        res.sendStatus(204);
    }
};

module.exports = user;