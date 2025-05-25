import { registrar } from './api.js';

document.getElementById('cadastroForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const senhaConfirmada = document.getElementById('senhaConfirmada').value;
  const mensagemErro = document.getElementById('mensagemErro');
  mensagemErro.textContent = '';

  if (senha !== senhaConfirmada) {
    mensagemErro.textContent = 'As senhas não coincidem.';
    return;
  }

  try {
    const { status, data } = await registrar(email, senha, senhaConfirmada);

    if (status === 200 || status === 201) {
      alert('Cadastro realizado com sucesso! Redirecionando para login.');
      window.location.href = 'index.html';
    } else {
      mensagemErro.textContent = data?.mensagem || 'Erro ao cadastrar.';
    }
  } catch (error) {
    mensagemErro.textContent = 'Erro na requisição. Tente novamente mais tarde.';
    console.error('Erro ao registrar:', error);
  }
});
