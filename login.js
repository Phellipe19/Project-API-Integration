import { autenticar } from './api.js';

function parseJwt(token) {
  try {
    const base64Payload = token.split('.')[1];
    const payload = atob(base64Payload);
    return JSON.parse(payload);
  } catch {
    return null;
  }
}

document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const mensagemErro = document.getElementById('mensagemErro');
  mensagemErro.textContent = '';

  try {
    const { status, data } = await autenticar(email, senha);

    if (status === 200) {
      const payload = parseJwt(data.token);
      let expiracao = 'data não informada';
      if (payload && payload.exp) {
        expiracao = new Date(payload.exp * 1000).toLocaleString('pt-BR');
      }

      localStorage.setItem('usuario', JSON.stringify({
        email,
        token: data.token,
        expiracao
      }));

      window.location.href = 'bem-vindo.html';
    } else {
      mensagemErro.textContent = data?.mensagem || 'Usuário ou senha inválidos.';
    }
  } catch (error) {
    mensagemErro.textContent = 'Erro na requisição. Tente novamente mais tarde.';
    console.error('Erro ao fazer login:', error);
  }
});



