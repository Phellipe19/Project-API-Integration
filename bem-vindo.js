const usuario = JSON.parse(localStorage.getItem('usuario'));
const mensagemBoasVindas = document.getElementById('mensagemBoasVindas');
const btnLogout = document.getElementById('btnLogout');

if (usuario && usuario.email) {
    mensagemBoasVindas.textContent = 
      `🎉🎉🎉 🙌🙌🙌 Seja bem-vindo(a), ${usuario.email}! Seu token expira em ${usuario.expiracao || 'data não informada'}`;
  } else {
    window.location.href = 'index.html';
  }
  

btnLogout.addEventListener('click', () => {
  localStorage.removeItem('usuario');
  window.location.href = 'index.html';
});
