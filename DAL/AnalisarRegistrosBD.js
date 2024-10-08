"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analise = void 0;
var DBConnection_1 = require("./DBConnection");
var analise = function (usuario) {
    var contem = false;
    var queryString = "SELECT COUNT(username) FROM usuarios WHERE username = '?' OR email = '?'";
    DBConnection_1.db.query(queryString, [usuario.getNome(), usuario.getEmail()], function (err, result) {
        if (err) {
            console.error(err);
        }
        ;
        var resultado = Number(result);
        if (resultado > 0) {
            contem = true;
        }
        else {
            contem = false;
        }
    });
    return contem;
};
exports.analise = analise;
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
