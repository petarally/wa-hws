import express from "express";
import propertiesRouter from "./router/properties.js";
import offersRouter from "./router/offers.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/properties", propertiesRouter);
app.use("/offers", offersRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
