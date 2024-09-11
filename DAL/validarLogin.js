import { PrepareStatementInfo } from "mysql2";

//Método para validação de login
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'usuarios'
})

export function RegistrarUsuarioBD(usuario){
    try {
        let contem = null;
        const query = connection.query(
            'SELECT * FROM usuarios WHERE username = ? OR email = ? AND senha = ?', [usuario.getNome(), usuario.getEmail(), usuario.getSenha()], function(error, result){}
        )
        let eu = new PrepareStatementInfo();
        if (condition) {
            eu
        }
    } catch (error) {
        console.error(error);
    }
}
