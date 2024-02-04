require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const MainRouter = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.disable("etag");

app.use(morgan("tiny"));

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(MainRouter);
app.listen(port, () => console.log(`server ready, listening on port ${port}`));
