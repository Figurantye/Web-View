const usuarioController = require("../../Controller/UsuarioController")

let arrayUsuarios = []

document.getElementById('btn-close1').addEventListener('click', function () {
    document.getElementById('alert1').style = 'display: none'
})

document.getElementById('btn-close2').addEventListener('click', function () {
    document.getElementById('alert2').style = 'display: none'
})

document.getElementById('btn-close3').addEventListener('click', function () {
    document.getElementById('alert3').style = 'display: none'
})


document.getElementById('btRegistrar').addEventListener('click', function () {
    setTimeout(trigger, 3000)
})


document.getElementById('btRegistrar').addEventListener('click', spinner)




function trigger() {

    let contem = false //if false,add into array,if true ,doesnt add
    let confirmer = null //

    let nome = document.getElementById('txNome').value.trim();
    let email = document.getElementById('txEmail').value.trim().replace(/\s+/g, '');;
    let senha = document.getElementById('txSenha').value.trim().replace(/\s+/g, '');
    

    //First check

    if (nome == '' || email == '' || senha == '') {
        document.getElementById('alert2').style = 'background-color: white;color: black; margin: 1rem;box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;'
        document.getElementById('alert3').style = 'display: none '
        document.getElementById('alert1').style = 'display: none '
        contem = null
    }

    //

    //When array has an item

    //



    if (usuarioController.AnalisarRegistroController(nome, email) == false) {
        document.getElementById('alert1').style = 'background-color: white;color: black; margin: 1rem ;box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;'
        document.getElementById('alert3').style = 'display: none '
        document.getElementById('alert2').style = 'display: none'

    }

    if (usuarioController.AnalisarRegistroController(nome, email) == true) {
        usuarioController.RegistrarUsuarioController(nome, email, senha)
        document.getElementById('alert1').style = 'display: none'
        document.getElementById('alert2').style = 'display: none'
        document.getElementById('alert3').style = 'background-color: white;color: black; margin: 1rem ;box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;'

    }

    document.getElementById('btRegistrar').style = 'font-size: small;'
    document.getElementById('spinner').style = 'display: none; '

    console.log(arrayUsuarios)


}

function spinner() {
    document.getElementById('btRegistrar').style = 'display: none'
    document.getElementById('spinner').style = ''
}


 









//


