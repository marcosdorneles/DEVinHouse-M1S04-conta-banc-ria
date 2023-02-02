let arr = []

let usuario = {
    nome: "",
    cpf: "",
    celular: "",
    senha: "",
};

function getDataFromForm() {
    let userName = document.getElementById("nome").value;
    let userCpf = document.getElementById("cpf").value;
    let userCel = document.getElementById("celular").value;
    let userPassword = document.getElementById("senha").value;

    console.log(userName, userCpf, userPassword)

    transformUser(userCel, userCpf, userName, userPassword);
}

function transformUser(userCel, userCpf, userName, userPassword) {
    let user = {
        ...usuario,
        nome: userName,
        cpf: userCpf,
        celular: userCel,
        senha: userPassword
    };

    arr.push(user);
    console.log(arr)

}

