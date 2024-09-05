export class LoginModel {
    user;
    senha;
    
    constructor(user, senha){
        this.user = user;
        this.senha = senha;
    }

    getUser() {
        return this.user;
    }

    getSenha() {
        return this.senha;
    }

    setUser(userNovo){
        this.user = userNovo
    }

    setSenha(senhaNova){
        this.senha = senhaNova
    }
}