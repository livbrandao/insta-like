import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getPosts() {
  const db = await conexao.db("imersao-instalike");
  const colecao = db.collection("posts");
  return colecao.find().toArray();
}

export async function criarPost(novoPost) {
  const db = await conexao.db("imersao-instalike");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
}
