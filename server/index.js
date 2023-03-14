const express = require("express")
const mongoose = require("mongoose");
const bodyparse = require('body-parser')
const cors = require("cors")
const PORT = process.env.PORT || 5000
const app = express();
const userRoutes = require("./routes/user");
const offerRoutes = require("./routes/offer")
mongoose.connect("mongodb+srv://mahesh:maheshbv@cluster0.v1dvyhe.mongodb.net/?retryWrites=true&w=majority",).then(()=>{
        console.log("mongodb connected successfully ")
    }).catch(()=>{
        console.log("Failed to connect to database")
    });

app.use(cors())
app.use(bodyparse.json());
app.listen(PORT,()=>{
    console.log("successfully running server at "+PORT)
});

app.use("/user",userRoutes);
app.use("/offer",offerRoutes);

