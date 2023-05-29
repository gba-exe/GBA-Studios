const header = document.createElement('template');

header.innerHTML = `
<header>
<div class="container">
    <a href="../index.html">
        <img id="logoGBA" src="../images/GBA-studios.png" alt="logo GBA Studios">
    </a>
    <ul id="heaList">
        <li><a href="./notacao.html"> Notação</a></li>
        <li><a href="./ritmo.html">Ritmo</a></li>
        <li><a href="./escalas.html">Escalas</a></li>
        <li><a href="./harmonia.html">Harmonia Funcional</a></li>
        <li><a href="./modosGregos.html">Modos Gregos</a></li>
    </ul>
</div>
</header>
    `

document.body.appendChild(header.content);