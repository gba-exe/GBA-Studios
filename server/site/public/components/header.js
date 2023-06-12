const header = document.createElement('template');


if (sessionStorage.ID_USUARIO == 1) {
    header.innerHTML = `
    <header>
    <div class="container">
    <a href="../index.html">
                <img id="logoGBA" src="../images/GBA-studios.png" alt="logo GBA Studios">
            </a>
            <div class="divDireita">
                <ul id="heaList">
                    <li><a href="./notacao.html"> Notação</a></li>
                    <li><a href="./ritmo.html">Ritmo</a></li>
                    <li><a href="./escalas.html">Escalas</a></li>
                    <li><a href="./harmonia.html">Harmonia Funcional</a></li>
                    <li><a href="./modosGregos.html">Modos Gregos</a></li>
                </ul>
                <a href="./teste.html" class="vl"></a>
                <a href="./dashboard.html"><svg id="chart" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <style>
                    svg {
                        fill: #ffffff
                    }
                </style>
                <path
                    d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
            </svg>  </a>
                          <p id="nomeUsuario">${sessionStorage.NOME_USUARIO}</p>
                <p id="pLogout" onclick="logout()">Log-Out</p>
                </div>
        </div>
    </header>
            `
} else if (sessionStorage.EMAIL_USUARIO != undefined) {
    header.innerHTML = `
        <header>
        <div class="container">
                <a href="../index.html">
                    <img id="logoGBA" src="../images/GBA-studios.png" alt="logo GBA Studios">
                </a>
                <div class="divDireita">
                    <ul id="heaList">
                        <li><a href="./notacao.html"> Notação</a></li>
                        <li><a href="./ritmo.html">Ritmo</a></li>
                        <li><a href="./escalas.html">Escalas</a></li>
                        <li><a href="./harmonia.html">Harmonia Funcional</a></li>
                        <li><a href="./modosGregos.html">Modos Gregos</a></li>
                    </ul>
                    <a href="./teste.html" class="vl"></a>
                    <svg id="user" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                    <p id="nomeUsuario">${sessionStorage.NOME_USUARIO}</p>
                    <p id="pLogout" onclick="logout()">Log-Out</p>
                    </div>
            </div>
        </header>
                `
} else {
    header.innerHTML = `
            <header>
        <div class="container">
            <a href="../index.html">
                <img id="logoGBA" src="../images/GBA-studios.png" alt="logo GBA Studios">
            </a>
            <div class="divDireita">
                <ul id="heaList">
                    <li><a href="./notacao.html"> Notação</a></li>
                    <li><a href="./ritmo.html">Ritmo</a></li>
                    <li><a href="./escalas.html">Escalas</a></li>
                    <li><a href="./harmonia.html">Harmonia Funcional</a></li>
                    <li><a href="./modosGregos.html">Modos Gregos</a></li>
                    </ul>
                <a href="./teste.html" class="vl"></a>
                <a id="aLogin" href="./login.html">Login</a>
                <a id="aCadastro" href="./cadastro.html">Cadastro</a>    
            </div>
        </div>
    </header>
    `
}

document.body.appendChild(header.content);