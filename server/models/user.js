
var mongoose       = require('mongoose');
var Schema         = mongoose.Schema,
userSchema = new Schema({
    name: { type: String, required: [true, "Name required"]}
},{timestamps:true});

mongoose.model("User",userSchema);
