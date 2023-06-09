function entrar() {
    var emailVar = iptNome.value;
    var senhaVar = iptSenha.value;

    if (emailVar == "" || senhaVar == "") {
        alert("Preencha todos os campos");
        return false;
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;

                if (json.fkAdm == null){
                    window.location = "./dashboard.html"
                } else {
                    window.location = "../index.html";
                }


            });

        } else {
            alert("Email e/ou senha inválidos")
            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function pegarId() {
    var idUsuarioVar = sessionStorage.ID_USUARIO;
    
    if (idUsuarioVar != undefined) {
        fetch("/usuarios/registrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuarioVar,
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO registrarLogin()!")
    
            if (resposta.ok) {
                console.log(resposta);
    
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                });
    
            } else {
                console.log("Houve um erro ao tentar registrar o login!");
    
                resposta.text().then(texto => {
                    console.error(texto);
                });
            }
    
        }).catch(function (erro) {
            console.log(erro);
        })
    
        return false;
    }
}
