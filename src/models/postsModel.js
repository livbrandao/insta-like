import conectarAoBanco from "../config/dbConfig.js";
import { ObjectId } from "mongodb";

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

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-instalike");
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return colecao.updateOne({ _id: new ObjectId(objID) }, { $set: novoPost });
}
