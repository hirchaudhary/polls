var mongoose       = require('mongoose');
var Schema         = mongoose.Schema,
questionSchema = new Schema({
    question: { type: String, required: [true, "Name required"]},
    user: { type: String}
},{timestamps:true});

mongoose.model("Question",questionSchema);