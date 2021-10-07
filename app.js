import express from "express";

const app = express();

const returnAllBooks = (req, res) => {
  console.log(`This will return all books,`);
  res.status(200).send(`Recived`);
};

app.route("/getBooks").get(returnAllBooks);

app.route("/searchAllBooks").get((req, res) => {
  res.status(500).send({ status: "error" });
});

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
