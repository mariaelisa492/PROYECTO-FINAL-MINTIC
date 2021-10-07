const mongoose = require('mongoose');
require('dotenv').config();   

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true})
    .catch((error) => console.log(`${error} did not connect`));