const express = require("express");
const cors = require("cors");
const connectDB = require("./config");
const dataRoutes = require("./routes/dataRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();
app.use("/api", dataRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
