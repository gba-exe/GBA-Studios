function cadastrar() {
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var idUsuarioVar = sessionStorage.ID_USUARIO; 
    var cepVar = iptCEP.value
    var ruaVar = iptRua.value
    var numeroVar = iptNumero.value
    var complementoVar = iptComplemento.value
    var bairroVar = iptBairro.value
    var cidadeVar = iptCidade.value
    var estadoVar = iptEstado.value

    if (cepVar == "" || ruaVar == "" || numeroVar == "" || complementoVar == "" || cidadeVar == "" || estadoVar == "" || bairroVar == "") {
        alert("Preencha todos os campos");

        return false;
    }

    if (estadoVar.length > 2) {
        alert("O estado só pode conter duas letras!");

        return false;
    }

    if (cepVar.length < 8) {
        alert("O cep deve conter no mínimo 8 caracteres!")
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrarEndereco", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            cepServer: cepVar,
            ruaServer: ruaVar,
            numeroServer: numeroVar,
            complementoServer: complementoVar,
            bairroServer: bairroVar,
            cidadeServer: cidadeVar,
            estadoServer: estadoVar,
            idUsuarioServer: idUsuarioVar,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso! Redirecionando para tela inicial...");

            setTimeout(() => {
                window.location = "../index.html";
            }, "2000")
        } else {
            alert('Endereço já cadastrado');
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}
