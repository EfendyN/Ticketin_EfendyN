require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./routes");
const port = process.env.PORT;

app.use(express.json());

app.use(cors());

app.use("/api", route);

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: "You are not authorized." });
  } else {
    next(err);
  }
});

app.listen(port, () => console.log(`Server is running in port ${port}`));
