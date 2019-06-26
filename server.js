const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

// body parser middleware
app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(cors());

// DB config
const db = require('./config/keys').mongoURI;

//connect DB
mongoose.connect(db, {useNewUrlParser: true })
.then(() => {
    console.log('DB connected...')})
.catch(err => console.log(err));

//routes
const colorRouter = require('./server/routes/colorRoutes');
app.use('/color',colorRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Server started on Port : ${port}`));