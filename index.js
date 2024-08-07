const express = require("express");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");
const PORT = 3000;

const app = express();
app.use(express.json());

let db;
connectToDb((err) => {
  if (!err) {
    app.listen(PORT, () =>
      console.log(`App running at "http://localhost:${PORT}"`)
    );
    db = getDb();
  }
});

app.get("/", (req, res) => res.status(200).send("Welcome Home"));

app.get("/api/all-products", (req, res) => {
  let allProducts = [];
  db.collection("products")
    .find()
    .forEach((product) => allProducts.push(product))
    .then(() => res.status(200).json(allProducts))
    .catch(() => res.status(500).json({ error: "Could not fetch products" }));
});

app.get("/api/men's-clothing", (req, res) => {
  let mensClothing = [];
  db.collection("products")
    .find()
    .filter({ category: "men's clothing" })
    .forEach((product) => mensClothing.push(product))
    .then(() => res.status(200).json(mensClothing))
    .catch(() => res.status(500).json({ error: "Could not fetch products" }));
});

app.get("/api/women's-clothing", (req, res) => {
  let womensClothing = [];
  db.collection("products")
    .find()
    .filter({ category: "women's clothing" })
    .forEach((product) => womensClothing.push(product))
    .then(() => res.status(200).json(womensClothing))
    .catch(() => res.status(500).json({ error: "Could not fetch products" }));
});

app.get("/api/electronics", (req, res) => {
  let electronics = [];
  db.collection("products")
    .find()
    .filter({ category: "electronics" })
    .forEach((product) => electronics.push(product))
    .then(() => res.status(200).json(electronics))
    .catch(() => res.status(500).json({ error: "Could not fetch products" }));
});

app.get("/api/jewellery", (req, res) => {
  let jewellery = [];
  db.collection("products")
    .find()
    .filter({ category: "jewellery" })
    .forEach((product) => jewellery.push(product))
    .then(() => res.status(200).json(jewellery))
    .catch(() => res.status(500).json({ error: "Could not fetch products" }));
});

app.post("/api/products", (req, res) => {
  const product = req.body;
  db.collection("products")
    .insertOne(product)
    .then((result) => res.status(201).json(result))
    .catch(() => res.status(500).json({ error: "Could not create document" }));
});

app.delete("/api/products/:id", (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
      db.collection("products")
        .deleteOne({ _id: new ObjectId(req.params.id) })
        .then((result) => res.status(204).json(result))
        .catch((err) => res.status(500).json({ error: err }));
    } else {
      res.status(404).json({ error: "Passed ID invalid" });
    }
  });





  