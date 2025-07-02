import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const ContactSchema=mongoose.Schema({
    _id:Number,
    name:{
        type:String,
        required:[true,"name is required"],
        uppercase:true,
        trim:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        lowercase:true,
        trim:true,
        unique:true
    },
    contact:{
        type: String,
        required: [true,"Mobile is required"],
        maxlength: 12,
        minlength:10,
        trim: true
    },
    message:{
        type:String,
        requires:[true,"message is required"],
        maxlength:50
    },
    info:String
});

ContactSchema.plugin(mongooseUniqueValidator);

const ContactSchemaModel=mongoose.model('contact_collection',ContactSchema);

export default ContactSchemaModel;












