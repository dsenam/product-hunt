const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express();
app.use(express.json())
app.use(routes)

mongoose.connect('mongodb+srv://dsenam:j5nf5KyB7p0mWFMa@cluster0.trkgr.mongodb.net/producthunt?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.listen(3333)