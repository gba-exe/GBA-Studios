function obterQtdLogin() {
    fetch(`/dashboard/qtdLogin/`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarQtdLogin(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarQtdLogin(resposta) {

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: 'Quantidade de Logins',
            data: [],
            fill: true,
            backgroundColor: 'rgb(0, 0, 0)',
            borderColor: 'rgb(255, 255, 255)',
            borderWidth: 1,
        },
        ]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterQtdLogin" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.dataLogin);
        dados.datasets[0].data.push(registro.qtdLogin);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'bar',
        data: dados,
    };

    // Adicionando gráfico criado em div na tela
    let qtdLogin = new Chart(
        document.getElementById(`qtdLogin`),
        config
    );

}

function obterLogin() {
    fetch(`/dashboard/login/`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarLogin(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarLogin(resposta) {

    console.log('iniciando plotagem do gráfico...');

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterLogin" e passados para "plotarLogin":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    var registro = resposta[0];


    qtdAcessos.innerHTML = `<h1>${registro.login}</h1> <p>Acessos</p>`

}

function obterQtdUsuarios() {
    fetch(`/dashboard/qtdUsuarios/`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarQtdUsuarios(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarQtdUsuarios(resposta) {

    console.log('iniciando plotagem do gráfico...');

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterQtdUsuarios" e passados para "plotarQtdUsuarios":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    var registro = resposta[0];


    qtdUsuarios.innerHTML = `<h1>${registro.usuarios}</h1> <p>Usuarios</p>`

}

function obterQtdPresencial() {
    fetch(`/dashboard/qtdEnderecos/`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarQtdPresencial(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarQtdPresencial(resposta) {

    console.log('iniciando plotagem do gráfico...');

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterQtdUsuarios" e passados para "plotarQtdUsuarios":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    var registro = resposta[0];
    let total = Number(registro.totalUsuarios);
    let porcentagem = Number(registro.totalEndereco);
    let media = (porcentagem / total) * 100;

    qtdPresencial.innerHTML = `<h1>${media.toFixed()}%</h1> <p>Dos usuarios querem um curso presencial.</p>`
}

function obterNivelConhecimento() {
    fetch(`/dashboard/nivConhecimento/`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarNivelConhecimento(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarNivelConhecimento(resposta) {

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = ['Nenhum', 'Básico', 'Médio', 'Alto'];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: 'Nível de Conhecimento',
            data: [],
            fill: true,
            backgroundColor: [
                'rgb(64, 64, 64)',
                'rgb(0, 0, 0)',
                'rgb(255, 255, 255)',
                'rgb(128, 128, 128)'
            ],
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 1,
        },
        ]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterQtdLogin" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        dados.datasets[0].data.push(registro.nivelConhecimento);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'doughnut',
        data: dados,
    };

    // Adicionando gráfico criado em div na tela
    let nivConhecimento = new Chart(
        document.getElementById(`nivConhecimento`),
        config
    );

}

function obterEnderecos() {
    fetch(`/dashboard/usrPresencial/`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarEnderecos(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarEnderecos(resposta) {
    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterEnderecos" e passados para "plotarEnderecos":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        if (registro.rua != null) {
            endereco.innerHTML += ` <div class="linha"><div class="esquerda"><p>${registro.nome}</p></div><a class="vl1"></a><div class="direita"><p>Rua ${registro.rua}, ${registro.numero}, ${registro.complemento} - ${registro.bairro}, ${registro.cidade} - ${registro.estado}</p></div></div>`;
        }
    }
}

