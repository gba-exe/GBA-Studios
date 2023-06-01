

if (sessionStorage.EMAIL_USUARIO != undefined) {
    aLogin.style.display = 'none';
    aCadastro.style.display = 'none';
    user.style.display = 'block';
} else {
    aLogin.style.display = 'block';
    aCadastro.style.display = 'flex';
    user.style.display = 'none';
}