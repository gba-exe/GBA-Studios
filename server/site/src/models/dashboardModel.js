var database = require("../database/config");

function qtdLogin() {

    instrucao = `
        select DATE_FORMAT(datalogin,'%d - %b') as dataLogin, count(fkUsuario) as qtdLogin from login group by date_format(datalogin, '%d - %m') order by date_format(datalogin, '%m %d') desc;
        `;


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function login() {

    instrucao = `
        select count(fkUsuario) as login from login;
        `;


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function qtdUsuarios() {

    instrucao = `
        select count(idUsuario) as usuarios from usuario;
        `;


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function qtdEnderecos() {
    instrucao = `
        select count(idUsuario) as totalUsuarios, count(idEndereco) as totalEndereco from usuario left join endereco on idUsuario = fkUsuario;
        `;


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function usrPresencial() {
    instrucao = `
    select nome, rua, numero, complemento, bairro, cidade, estado from usuario left join endereco on idUsuario = fkUsuario;
    `;


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function nivConhecimento() {
    instrucao = `
        select count(nivelConhecimento) as nivelConhecimento from usuario group by nivelConhecimento;
        `;


    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    qtdLogin,
    login,
    qtdUsuarios,
    qtdEnderecos,
    usrPresencial,
    nivConhecimento
}