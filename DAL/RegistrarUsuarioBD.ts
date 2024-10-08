import { UsuarioModel } from "../Model/UsuarioModel";
import { db } from "./DBConnection";

export const create = (usuario:UsuarioModel) => {
  const queryString = "INSERT INTO usuarios (username, password, email) VALUES (?, ?, ?)";

  db.query(
    queryString,
    [usuario.getNome(), usuario.getSenha(), usuario.getEmail()]
  );
};  