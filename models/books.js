import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    content: String,
});

const Book = mongoose.model('Book', BookSchema);

export default Book;