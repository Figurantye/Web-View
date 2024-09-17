=
export function AnalisarRegistros(usuario){
    try {
        const [results, fields] = connection.query(
            "SELECT COUNT(username) FROM usuarios WHERE username = '"+ usuario.getNome() + "' OR email = "+usuario.getEmail()+"'"
        )
        console.log(results);
        console.log(fields);

        return results;
        
    } catch (error) {
        console.error(error);
    }
}