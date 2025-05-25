document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagemErro = document.getElementById('mensagemErro');
    mensagemErro.textContent = '';
  
    if (senha !== confirmarSenha) {
      mensagemErro.textContent = 'As senhas não coincidem.';
      return;
    }
  
    const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/;

    if (!senhaForte.test(senha)) {
      mensagemErro.textContent = 'A senha deve conter ao menos uma letra maiúscula, uma minúscula e um caractere especial.';
      return;
    }

    try {
      const { status, data } = await registrar(email, senha, confirmarSenha);
  
      if (status === 200) {
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'login.html';
      } else {
        mensagemErro.textContent = data?.mensagem || 'Erro ao cadastrar';
      }
    } catch (err) {
      mensagemErro.textContent = 'Erro de conexão com o servidor.';
    }
  });
  