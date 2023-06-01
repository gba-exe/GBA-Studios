const header = document.createElement('template');

if (sessionStorage.EMAIL_USUARIO != undefined) {
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
                <div class="vl"></div>
                <svg id="user" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
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
                <div class="vl"></div>
                <a class="aLogin" href="./login.html">Login</a>
                <a class="aCadastro" href="./cadastro.html">Cadastro</a>    
            </div>
        </div>
    </header>
    `
}

document.body.appendChild(header.content);