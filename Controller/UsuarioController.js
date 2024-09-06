import { UsuarioModel } from "../Model/UsuarioModel";

const { RegistrarUsuario } = require("../DAL/RegistrarUsuario");

export function inserirRegistroController(username, email, senha) {
    const usuario = new UsuarioModel(username, email, senha);
    RegistrarUsuario.RegistrarUsuario(usuario);
}
