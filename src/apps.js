import express from "express";
import fs from "fs";
import config from "./config/config.js";

const app = express();

// HTTP GET
app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
    status: "OK",
  });
});

app.get("/about", (req, res) => {
  res.send("Hello from about page");
});

app.get("/contact", (req, res) => {
  res.send("Hello from contact page");
});

// HTTP POST
app.post("/", (req, res) => {
  res.send("Create data from home page");
});

app.post("/about", (req, res) => {
  res.send("Hello from about page");
});

app.post("/contact", (req, res) => {
  res.send("Hello from contact page");
});

// HTTP PUT
app.put("/", (req, res) => {
  res.send("Update data from home page");
});

// HTTP DELETE
app.delete("/", (req, res) => {
  res.status(403).send("Delete data from home page");
});

// HTTP PATCH
app.patch("/", (req, res) => {
  res.send("Patch");
});

app.get("/products", (req, res) => {
  const products = fs.readFile("data/products.json", "utf8");
  const data = JSON.parse(products);
  res.json(data);
});

app.listen(config.port, () => {
  console.log('Server is running on port: &(config.port');
});