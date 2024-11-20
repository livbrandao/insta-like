import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Escutando ...");
});

async function getPosts() {
  const db = await conexao.db("imersao-instalike");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}

app.get("/posts", async (req, res) => {
  const posts = await getPosts();
  res.status(200).json(posts);
});
