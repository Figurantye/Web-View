const mysql = require('mysql');
const { UsuarioModel } = require('../Model/UsuarioModel');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'usuarios',
    database: 'usuarios'
})

export function RegistrarUsuarioBD(usuario){
    try {
        const query = connection.query(
            'INSERT INTO dadosUsuario (username, email, senha) VALUES (?, ?, ?)', [usuario.getNome(), usuario.getEmail(), usuario.getSenha()], function(error, result){}
        )
    } catch (error) {
        console.error(error);
    }
}