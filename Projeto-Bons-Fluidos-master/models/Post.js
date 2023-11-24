const conn = require("../db/conn");

class Posts {
  constructor(titulo, conteudo, data) {
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.data = data;
  }

  static async listar() {
    try {
      const palestras = await conn.db().collection("post").find().toArray();
      return palestras;
    } catch (error) {
      throw error;
    }
  }

  static async listarUm(tituloProcurado) {
    try {
      const palestra = await conn.db().collection("post").findOne({ titulo: tituloProcurado });
      return palestra;
    } catch (error) {
      throw error;
    }
  }

  static async excluir(id) {
    try {
      const resultado = await conn.db().collection("post").deleteOne(id);
      if (resultado.deletedCount === 1) {
        console.log(`Documento com ID ${id} excluído com sucesso`);
        return true;
      } else {
        console.log(`Nenhum documento foi excluído. Verifique o ID.`);
        return false;
      }
    } catch (error) {
      console.error(`Erro ao excluir documento: ${error}`);
      throw error;
    }
  }

  async save() {
    return new Promise((resolve, reject) => {
      conn
        .db()
        .collection("post")
        .insertOne(
          {
            titulo: this.titulo,
            conteudo: this.conteudo,
            data: this.data,
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
    });
  }
}
module.exports = Posts;
