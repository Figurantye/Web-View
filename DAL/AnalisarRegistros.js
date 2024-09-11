const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'usuarios'
})

export function AnalisarRegistros(usuario){
    try {
        let contem = null;
        const query = connection.query(
            "SELECT COUNT(username) FROM usuarios WHERE username = '"+ usuario.getNome() + "' OR email = "+usuario.getEmail()+"'", function(error, result){
                if (result > 0) {
                    contem = true;
                } else {
                    contem = false;
                }
            }
        )
        
    } catch (error) {
        console.error(error);
    }

    return contem;
}