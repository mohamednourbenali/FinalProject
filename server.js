const express = require ('express');
const path = require ('path');
const mongoose = require ('mongoose');

const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes/api');
const authRouter = require('./routes/auth');


// connect to mongoose
const connectDB = require ('./config/connectDB');
connectDB();



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/auth' , authRouter)

app.use('/app',routes);
app.listen(PORT,console.log('The server is running,'+'Please open your browser at http://localhost:%s',PORT));