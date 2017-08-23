var mongoose       = require('mongoose');
var Schema         = mongoose.Schema,
optionSchema = new Schema({
    one: { type: String, required: [true, "Option required"]},
    vote_one: {type: Number},
    two: { type: String, required: [true, "Option required"]},
    vote_two: {type: Number},
    three: { type: String, required: [true, "Option required"]},
    vote_three: {type: Number},
    four: { type: String, required: [true, "Option required"]},
    vote_four: {type: Number},
    _question: {type: Schema.Types.ObjectId, ref: 'Question'}
},{timestamps:true});

mongoose.model("Option",optionSchema);