import { UsuarioModel } from "../Model/UsuarioModel";

export function RegistrarUsuarioController(username, email, senha) {
    const usuario = new UsuarioModel(username, email, senha);
    usuario.RegistrarUsuarioModel(usuario);
}

export function AnalisarRegistroController(username, email) {
    const usuario = new UsuarioModel(username, email);
    usuario.AnalisarRegistroModel(usuario);
}