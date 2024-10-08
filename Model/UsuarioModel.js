"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModel = void 0;
var AnalisarRegistrosBD_1 = require("../DAL/AnalisarRegistrosBD");
var RegistrarUsuarioBD_1 = require("../DAL/RegistrarUsuarioBD");
var UsuarioModel = /** @class */ (function () {
    
    class UsuarioModel {
        constructor(nome, email, senha) {
            this.nome = nome;
            this.email = email;
            this.senha = senha;
        }
        getNome() {
            return this.nome;
        }
        getEmail() {
            return this.email;
        }
        getSenha() {
            return this.senha;
        }
        setNome(name) {
            this.nome = name;
        }
        setEmail(email) {
            this.email = email;
        }
        setSenha(senha) {
            this.senha = senha;
        }
        RegistrarUsuarioModel(novoUsuario) {
            (0, RegistrarUsuarioBD_1.create)(novoUsuario);
        }
        AnalisarRegistroModel(novoUsuario) {
            (0, AnalisarRegistrosBD_1.analise)(novoUsuario);
        }
    }
    return UsuarioModel;
}());
exports.UsuarioModel = UsuarioModel;
