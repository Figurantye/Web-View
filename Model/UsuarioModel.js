const registrarUsuario = require('../DAL/RegistrarUsuarioBD.js')
const analisarRegistro = require('../DAL/AnalisarRegistrosBD.js')

export class UsuarioModel {
    nome;
    email;
    senha;
    
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    constructor(){
    }

    getNome(){
        return this.nome;
    }

    getEmail(){
        return this.email;
    }

    getSenha(){
        return this.senha;
    }

    setNome(name){
        this.nome = name;
    }

    setEmail(emeil){
        this.email = emeil;
    }

    setSenha(password){
        this.senha = password;
    }

    RegistrarUsuarioModel(novoUsuario){
        registrarUsuario.RegistrarUsuario(novoUsuario)
    }

    AnalisarRegistroModel(novoUsuario){
        analisarRegistro.AnalisarRegistros(novoUsuario)
    }



}