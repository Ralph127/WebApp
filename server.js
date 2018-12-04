const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const fruits = require('./routes/api/fruits');
const vegetables = require('./routes/api/vegetables');
const path = require('path');

const app = express();

// BodyParser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongo
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/fruits', fruits);
app.use('/api/vegetables', vegetables);

//serve static assest if in production
if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use('/static', express.static(path.join(__dirname, './client/build//static')));
    app.use('*', function(req, res) {
        res.sendFile('index.html', {root: path.join(__dirname, './client/build/')});
    });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));