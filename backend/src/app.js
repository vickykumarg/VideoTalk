import dotenv from 'dotenv';
dotenv.config();
import express from "express"
import mongoose from "mongoose"
import {createServer} from "node:http"
import {Server} from "socket.io"
import cors from "cors"
import { connectToSocket } from "./controllers/socketManager.js"
import userRoutes from "./routes/users.routes.js"

dotenv.config();

const app=express()
const server=createServer(app);
const io=connectToSocket(server);

app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));


app.use("/api/v1/users",userRoutes);

const start=async()=>{
    const connectionDB = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    });
    console.log(`Connection of Database : ${connectionDB.connection.host}`);
    server.listen(app.get("port"),()=>{
        console.log("Server is Listening");
    })
}

start();
