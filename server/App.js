const express=require("express");
const app=express();
const mongoose=require("mongoose");
const router = require("./routes/router");


const port=8030;
const uri="mongodb+srv://admin:Dtfuser098@cluster0.lrbxv.mongodb.net/task?retryWrites=true&w=majority"
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(express.json())
app.use(router)
app.listen(port,()=>{
    console.log(`server is start ${port}`)
})