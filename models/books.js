import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    content: String,
});

module.exports = mongoose.model('Book', BookSchema);