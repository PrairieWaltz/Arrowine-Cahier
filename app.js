// REQUIREMENTS //

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const Favorite = require("./models/favorite");

// MONGODB ROUTE //

mongoose.connect("mongodb://localhost:27017/cahier", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

// EXPRESS VIEW PATHS //

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// GET ROUTES //

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/sign-in/signin", (req, res) => {
  res.render("sign-in/signin");
});

app.get("/sign-in/signup", (req, res) => {
  res.render("sign-in/signup");
});

app.get("/sign-in/howitworks", (req, res) => {
  res.render("sign-in/howitworks");
});

app.get("/favorites", async (req, res) => {
  const favorites = await Favorite.find({});
  res.render("favorites/index", { favorites });
});

app.get("/favorites/new", (req, res) => {
  res.render("favorites/new");
});

app.post("/favorites", async (req, res) => {
  const favorite = new Favorite(req.body.favorite);
  await favorite.save();
  res.redirect(`/favorites/${favorite.id}`);
});

app.get("/favorites/:id", async (req, res) => {
  const favorite = await Favorite.findById(req.params.id);
  res.render("favorites/show", { favorite });
});

app.get("/favorites/:id/edit", async (req, res) => {
  const favorite = await Favorite.findById(req.params.id);
  res.render("favorites/edit", { favorite });
});

// UPDATE PAGE ROUTES //

app.put("/favorites/:id", async (req, res) => {
  const { id } = req.params;
  const favorite = await Favorite.findByIdAndUpdate(id, {
    ...req.body.favorite,
  });
  res.redirect(`/favorites/${favorite._id}`);
});

// DELETE PAGE ROUTES //

app.delete("/favorites/:id", async (req, res) => {
  const { id } = req.params;
  await Favorite.findByIdAndDelete(id);
  res.redirect("/favorites");
});

// SERVER FUNCTION //

app.listen(3000, () => {
  console.log("Loud and Clear on Port 3000");
});
