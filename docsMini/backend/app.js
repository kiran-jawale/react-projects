import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/docsmini');

const docSchema = new mongoose.Schema({
    description: String,
    filetype: String,
    size: String,
});

const Doc = mongoose.model('Doc', docSchema);

app.get('/api/getdocs', async (req, res) => {
    try {
        const docs = await Doc.find();
        res.json(docs);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/api/getjson/:id', async (req, res) => {
    try {
        const doc = await Doc.findById(req.params.id);
        if (!doc) {
            return res.status(404).send('Document not found');
        }
        res.json(doc);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/api/adddocs', async (req, res) => {
    const newDoc = new Doc({
        description: req.body.description,
        filetype: req.body.filetype,
        size: req.body.size,
    });
    try {
        const savedDoc = await newDoc.save();
        res.json(savedDoc);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
