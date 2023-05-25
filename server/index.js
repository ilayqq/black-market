require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userModel = require('./models/userModel.js');
const deviceModel = require('./models/deviceModel.js');
const cors = require('cors')
const router = require('./routes/index.js')
const path = require('path');
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()