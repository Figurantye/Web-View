import { UsuarioModel } from "../Model/UsuarioModel";
import { db } from "./DBConnection";

export const analise = (usuario:UsuarioModel) => {
    let contem:boolean = false;
    const queryString = "SELECT COUNT(username) FROM usuarios WHERE username = '?' OR email = '?'";

    db.query(
      queryString,
      [usuario.getNome(), usuario.getEmail()],
      (err, result) => {
        if (err) { 
            console.error(err);
         };
        var resultado = Number(result);
        if (resultado > 0) {
            contem = true
        } else {
            contem = false
        }
      }
    );

    return contem;
};


/*export function AnalisarRegistros(usuario){
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
    */