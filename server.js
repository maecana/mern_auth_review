const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');


// config .env to ./config/config.env
dotenv.config({
    path: './config/config.env',
});

const app = express();
const PORT = process.env.PORT;


// config for development env
if (process.env.NODE_ENV === "development") {
    app.use(cors({
        origin: process.env.CLIENT_URL,
    }));

    app.use(morgan('dev'));
}

app.listen(PORT, () => {
    console.log(`[SERVER] - App is running on https://localhost:${PORT}`);
});