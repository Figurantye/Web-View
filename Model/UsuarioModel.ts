import { analise } from "../DAL/AnalisarRegistrosBD";
import { create } from "../DAL/RegistrarUsuarioBD";

export class UsuarioModel {
    private nome:string;
    private email:string;
    private senha:string | null;
    
    constructor(nome:string, email:string, senha:string | null) {
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

    setNome(name:string){
        this.nome = name;
    }

    setEmail(email:string){
        this.email = email;
    }

    setSenha(senha:string){
        this.senha = senha;
    }

    RegistrarUsuarioModel(novoUsuario:UsuarioModel){
        create(novoUsuario)
    }

    AnalisarRegistroModel(novoUsuario:UsuarioModel){
        analise(novoUsuario)
    }



}