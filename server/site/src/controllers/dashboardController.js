var medidaModel = require("../models/dashboardModel");

function qtdLogin(req, res) {

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.qtdLogin().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a quantidade de logins.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function login(req, res) {

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.login().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a quantidade de logins.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function qtdUsuarios(req, res) {

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.qtdUsuarios().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a quantidade de usuarios.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function qtdEnderecos(req, res) {

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.qtdEnderecos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a quantidade de usuarios.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function usrPresencial(req, res) {

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.usrPresencial().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os endereços.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function nivConhecimento(req, res) {

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.nivConhecimento().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a quantidade de logins.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    qtdLogin,
    login,
    qtdUsuarios,
    qtdEnderecos,
    usrPresencial,
    nivConhecimento
}