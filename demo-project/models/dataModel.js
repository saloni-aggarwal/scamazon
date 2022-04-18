const mongoose = require('mongoose');

const amazonDataSchema = new mongoose.Schema({},{strict : false});

// console.log(amazonDataSchema);

amazonDataSchema.method("toJson", function() {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    console.log(object);
    return object;
});

const amazonData = mongoose.model('products', amazonDataSchema);
// console.log(amazonData);

module.exports = amazonData;


// // models/Book.js

// const mongoose = require(‘mongoose’);


// const BookSchema = new mongoose.Schema({

// title: {

// type: String,

// required: true

// },

// isbn: {

// type: String,

// required: true

// },

// author: {

// type: String,

// required: true

// },

// description: {

// type: String

// },

// published_date: {

// type: Date

// },

// publisher: {

// type: String

// },

// updated_date: {

// type: Date,

// default: Date.now

// }

// });


// module.exports = Book = mongoose.model(‘book’, BookSchema);