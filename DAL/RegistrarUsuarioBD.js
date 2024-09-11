const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'usuarios'
})

export function RegistrarUsuario(usuario){
    try {
        const query = connection.query(
            'INSERT INTO dadosUsuario (username, email, senha) VALUES (?, ?, ?)', [usuario.getNome(), usuario.getEmail(), usuario.getSenha()], function(error, result){}
        )
    } catch (error) {
        console.error(error);
    }
}