
if (sessionStorage.ID_USUARIO == 1) {
    aLogin.style.display = 'none';
    aCadastro.style.display = 'none';
    user.style.display = 'none';
    chart.style.display = 'block';
    pLogout.style.display = 'flex';
    nomeUsuario.innerHTML = `${sessionStorage.NOME_USUARIO}`
    presencial.style.display = 'flex';
    login.style.display = 'none';
} else if (sessionStorage.EMAIL_USUARIO != undefined) {
    aLogin.style.display = 'none';
    aCadastro.style.display = 'none';
    chart.style.display = 'none';
    user.style.display = 'block';
    pLogout.style.display = 'flex';
    nomeUsuario.innerHTML = `${sessionStorage.NOME_USUARIO}`
    presencial.style.display = 'flex';
    login.style.display = 'none';
} else {
    aLogin.style.display = 'flex';
    aCadastro.style.display = 'flex';
    chart.style.display = 'none';
    user.style.display = 'none';
    pLogout.style.display = 'none';
    presencial.style.display = 'none';
    login.style.display = 'flex';
}