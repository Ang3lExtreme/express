import "reflect-metadata";
import express from "express";
import "./database";
import {router} from "./routes";

const app  = express();

app.use(express.json())
app.use(router);

app.get("/test", (request, response) => {
  return response.send("Olá");
});


app.listen(3000, () => console.log("Server is running"))