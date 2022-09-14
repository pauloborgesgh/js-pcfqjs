// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let permissao = '';

switch (permissao) {
  case 'gerente':
    console.log('Gerente Logado');
    break;
  case 'diretor':
    console.log('diretor logado');
    break;
  case 'cliente':
    console.log('Cliente logado');
    break;

  default:
    console.log('Login não encontrado');
}
