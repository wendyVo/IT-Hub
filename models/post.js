const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body:{
    type:String,
    required:true
},
photo:{
  type:String,
  required:true
},
likes:[{type:ObjectId,ref:"User"}],
comments:[{
    text:String,
    postedBy:{type:ObjectId,ref:"User"}
}],
  date: { type: Date, default: Date.now },
  postedBy:{
    type:ObjectId,
    ref:"User"
 }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
