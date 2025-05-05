const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const storeRoute = require('./routes/store');
const bookRoute = require('./routes/books');


app.use(cors());
app.use(bodyParser.json());
app.use("/api", storeRoute);
app.use("/api", bookRoute);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});