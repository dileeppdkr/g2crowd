let mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

let Like = mongoose.model('Like', new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        index: true,
    },
    likes_count: {
        type: Number,
    },
}, {
    timestamps: true
    }
));

module.exports = Like;