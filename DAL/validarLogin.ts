import { UsuarioModel } from "../Model/UsuarioModel";
import { db } from "./DBConnection";

export const analise = (usuario:UsuarioModel) => {
    let contem:boolean = false;
    const queryString = "SELECT COUNT(username) FROM usuarios WHERE username = '?' OR email = '?' AND password = '?'";

    db.query(
      queryString,
      [usuario.getNome(), usuario.getEmail(), usuario.getSenha()],
      (err, result) => {
        if (err) { 
          console.error(err);
        };
        let resultado = Number(result);
        if (resultado > 0) {
            contem = true
        } else {
            contem = false
        }
      }
    );

    return contem;
};