const express = require('express')
require("dotenv").config();
const cors = require('cors');
const app = express();
const connections = require('./db.js');
const userRoutes = require('./routes/users.js');
const authRoutes = require('./routes/auth.js');
connections();
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server running on the PORT ${PORT}`);
});