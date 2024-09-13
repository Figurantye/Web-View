const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'usuarios'
})

export function AnalisarRegistros(usuario){
    let contem = null; 
    try {
        const query = connection.query(
            "SELECT COUNT(username) FROM usuarios WHERE username = '"+ usuario.getNome() + "' OR email = "+usuario.getEmail()+"'", function(error, result){
                if (result > 0) {
                    contem = false;
                } else {
                    contem = true;
                }
            }
        )
        
    } catch (error) {
        console.error(error);
    }

    return contem;
}