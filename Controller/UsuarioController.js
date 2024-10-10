"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const UsuarioModel_js_1 = require("../Model/UsuarioModel.js");
var UsuarioController = /** @class */ (function () {
    class UsuarioController {
        constructor() {
        }
        RegistrarUsuarioController(username, email, senha) {
            var usuario = new UsuarioModel_js_1.UsuarioModel(username, email, senha);
            usuario.RegistrarUsuarioModel(usuario);
        }
        AnalisarRegistroController(username, email) {
            var usuario = new UsuarioModel_js_1.UsuarioModel(username, email, null);
            usuario.AnalisarRegistroModel(usuario);
        }
    }
    return UsuarioController;
}());
exports.UsuarioController = UsuarioController;
