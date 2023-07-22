// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const userRoutes = require ("./routes/UserRoutes");
// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/netflix', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("DB Connected");
//     })
//     .catch((err) => {
//         console.log(`OH NO! MONGO CONNECTION ERROR!`);
//         console.log(err);
//     })



// // mongoose
// // .connect("mongodb://localhost:27017/netflix",{
// // useNewUrlParser : true,
// // useUnifiedTopology: true,
// // })
// // .then(() => {
// //     console.log("DB Connetion Successfull");
// //   });

 
// app.listen(3000, () => {
//     console.log('DB connected');
// })
// // app.use("/api/user", userRoutes);
// app.listen(5000, console.log("server started",));

const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
