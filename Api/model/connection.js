import mongoose from "mongoose";

const url="mongodb://127.0.0.1:27017/My_Portofolio"
mongoose.connect(url)
console.log("successfully connect database");



