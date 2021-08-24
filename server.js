const express = require("express");

const app = express();

const upload = require("express-fileupload");
const uploads = require("./route");


// Enabling CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT,PATCH"
  );
  next();
});
app.use(
  express.urlencoded({
    extended: false,
    limit: "10gb",
  })
);

app.use(
  express.json({
    limit: "10gb",
  })
);

app.use(upload());
app.use("/uploads", express.static("uploads"));

app.use("/file-content", uploads);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
