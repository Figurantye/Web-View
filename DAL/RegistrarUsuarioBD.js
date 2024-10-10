"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var DBConnection_1 = require("./DBConnection");
var create = function (usuario) {
    var queryString = "INSERT INTO usuarios (username, password, email) VALUES (?, ?, ?)";
    DBConnection_1.db.query(queryString, [usuario.getNome(), usuario.getSenha(), usuario.getEmail()]);
};
exports.create = create;
