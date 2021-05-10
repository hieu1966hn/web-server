import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import cors from "cors";
import postRoutes from "./routes/posts.js"
import dotenv from "dotenv"


const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use("/posts", postRoutes);
const CONNECTION_URL = 'mongodb://hieu1966hn:hieu1966hn@cluster0-shard-00-00.eavto.mongodb.net:27017,cluster0-shard-00-01.eavto.mongodb.net:27017,cluster0-shard-00-02.eavto.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-mcehsk-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { return app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)) })
    .catch((error) => console.log("this is error message", error.message));

mongoose.set("useFindAndModify", false);
// don't get warning in console




