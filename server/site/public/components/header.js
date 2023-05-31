const header = document.createElement('template');

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

document.body.appendChild(header.content);