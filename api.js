const BASE_URL = 'https://umfgcloud-autenticacao-service-7e27ead80532.herokuapp.com';

export async function autenticar(email, senha) {
  const response = await fetch(`${BASE_URL}/Autenticacao/autenticar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  });

  const contentType = response.headers.get('content-type');
  let data;

  if (contentType && contentType.includes('application/json')) {
    data = await response.json();
  } else {
    const text = await response.text();
    data = { mensagem: text };
  }

  return { status: response.status, data };
}

export async function registrar(email, senha, senhaConfirmada) {
  const response = await fetch(`${BASE_URL}/Autenticacao/registrar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha, senhaConfirmada }) 
  });

  const contentType = response.headers.get('content-type');
  let data;

  if (contentType && contentType.includes('application/json')) {
    data = await response.json();
  } else {
    const text = await response.text();
    data = { mensagem: text };
  }

  return { status: response.status, data };
}



