import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "to_do_list",
  password: "postgres",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", async (req, res) => {
  const listItemsFromDb = await db.query("SELECT * FROM items");
  console.log(listItemsFromDb.rows);
  res.render("index.ejs", {
    listTitle: "Today's Task",
    listItems: listItemsFromDb.rows
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  //items.push({ title: item });
  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch (err) {
    console.log(err.stack);
  }
});

app.post("/edit", (req, res) => {
  const updatedTitle = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;
  try {
    db.query("UPDATE items SET title = ($1) WHERE id = $2", [updatedTitle, id]);
    res.redirect("/");
  } catch (err) {
    console.log(err.stack);
  }

});

app.post("/delete", (req, res) => {
  const deleteItemId = req.body.deleteItemId;
  try {
    db.query("DELETE FROM items WHERE id = $1", [deleteItemId]);
    res.redirect("/");
  } catch (err) {
    console.log(err.stack);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
