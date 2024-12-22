import dotenv from "dotenv";
dotenv.config();
import express from "express"
import emailRoutes from "./src/routes/email.routes.js";
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/v1", emailRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})