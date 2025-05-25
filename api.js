const BASE_URL = 'https://umfgcloud-autenticacao-service-7e27ead80532.herokuapp.com';

export async function autenticar(email, senha) {
  const response = await fetch(`${BASE_URL}/Autenticacao/autenticar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  });
  return response.json().then(data => ({ status: response.status, data }));
}

export async function registrar(email, senha, senhaConfirmada) {
  const response = await fetch(`${BASE_URL}/Autenticacao/registrar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha, senhaConfirmada }) 
  });
  return response.json().then(data => ({ status: response.status, data }));
}
