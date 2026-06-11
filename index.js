const express = require('express');
const app = express();
const apiRoute = require('./routes/api-route');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/student-api')
.then(()=> console.log('Connected to MongoDB'));

app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs');
app.use(express.json());
app.use('/', apiRoute);

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})