import { UsuarioModel } from "../Model/UsuarioModel.js";

export class UsuarioController {
    RegistrarUsuarioController(username: string, email: string, senha: string) {
        const usuario = new UsuarioModel(username, email, senha);
        usuario.RegistrarUsuarioModel(usuario);
    }
  
    AnalisarRegistroController(username: string, email: string) {
        const usuario = new UsuarioModel(username, email, null);
        usuario.AnalisarRegistroModel(usuario);
    }
}
