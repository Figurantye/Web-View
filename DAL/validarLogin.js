"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analise = void 0;
var DBConnection_1 = require("./DBConnection");
var analise = function (usuario) {
    var contem = false;
    var queryString = "SELECT COUNT(username) FROM usuarios WHERE username = '?' OR email = '?' AND password = '?'";
    DBConnection_1.db.query(queryString, [usuario.getNome(), usuario.getEmail(), usuario.getSenha()], function (err, result) {
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
