import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/users.js";

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a stackoverflow clone api");
});

app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

const CONNECTION_URL =
  "mongodb+srv://admin:admin@stack-overflow-clone.1geriay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&authSource=admin";

mongoose.set("strictQuery", false);
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server runnning on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
