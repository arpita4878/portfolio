import  '../model/connection.js'

import ContactSchemaModel from '../model/contact.model.js'


export const save=async(req,res)=>{
console.log(req.body);

    const users=await ContactSchemaModel.find();
    const len=users.length;
    const _id=len==0?1:users[len-1]._id+1;

    const userDetails={...req.body,'_id':_id,'info':Date()}

    try{
        await ContactSchemaModel.create(userDetails)
        res.status(201).json({"status":true})

    }
    catch(error)
    {
        res.status(500).json({"status":false})
        console.log("error",error);
        
    }

}













