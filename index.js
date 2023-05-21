import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import Book from './models/books.js';

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

app.get('/', (res, req) => {
    res.json({ title: 'hihi'});
})
app.post('/add-note', async (req, res) => {
    try {
        await Book.insertMany([
            {
                title: 'Hello Cyclic',
                content: "I'm trying Cyclic",
            }
        ]);
        res.send('Data added');
    } catch (error) {
        console.log(error);
    }
})

app.get('/books', async (req, res) => {
    const books = await Book.find();
    if (books) {
        res.json(books);
    } else {
        res.send("Something went wrong");
    }
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
    })
})