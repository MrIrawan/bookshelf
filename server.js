const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api");

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});