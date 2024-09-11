import { RegistrarUsuarioBD } from "../DAL/RegistrarUsuario";

export class UsuarioModel {
    nome;
    email;
    senha;
    
    constructor(){

    }

    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
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

    inserirUsuarioModel(novoUsuario){
        const registrar = new RegistrarUsuarioBD;
        registrar.RegistrarUsuario(novoUsuario);
    }
}