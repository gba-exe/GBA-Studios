if (sessionStorage.EMAIL_USUARIO != undefined) {
    aLogin.style.display = 'none';
    aCadastro.style.display = 'none';
    user.style.display = 'block';
    nomeUsuario.innerHTML = `${sessionStorage.NOME_USUARIO}`
} else {
    aLogin.style.display = 'flex';
    aCadastro.style.display = 'flex';
    user.style.display = 'none';
}