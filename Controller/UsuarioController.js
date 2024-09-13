const usuarioModel = require('../Model/UsuarioModel')

function RegistrarUsuarioController(username, email, senha) {
    const usuario = new usuarioModel.UsuarioModel(username, email, senha);
    usuario.RegistrarUsuarioModel(usuario);
}

function AnalisarRegistroController(username, email) {
    const usuario = new usuarioModel.UsuarioModel(username, email);
    usuario.AnalisarRegistroModel(usuario);
}