const cadastro = document.getElementById("btnCadastrar")

cadastro.addEventListener("click", cadastrar)

function cadastrar() {
    const user = document.querySelector('#user').value
    const email = document.querySelector("#email").value
    const senha = document.querySelector("#senha").value
    fetch("dados.json")
    .then(response => response.json())
    .then(data => {
            const novoUsuario = {
                username: user,
                email: email,
                senha: senha
            }

            const usuarios = data.usuarios
            usuarios.push(novoUsuario)
        })
}
