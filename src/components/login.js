function login(navigateTo) {
  const main = document.createElement('main');

  const title = document.createElement('h2');
  title.textContent = 'Ingrese al SpookyVerse';

  const loginForm = document.createElement('form');

  const logo = document.createElement('img');
  logo.src = 'components/images/logo.png';
  logo.setAttribute('id', 'logo-login');

  const email = document.createElement('input');
  email.className = 'btn-email';
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Correo electronico');
  email.setAttribute('required', '');

  const password = document.createElement('input');
  password.className = 'btn-password';
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Contraseña');
  password.setAttribute('required', '');

  const forgotPassword = document.createElement('a');
  forgotPassword.className = 'forgot-password';
  forgotPassword.setAttribute('href', '/');
  forgotPassword.textContent = 'Olvidé mi contraseña';

  const btnEnter = document.createElement('button');
  btnEnter.className = 'btn-enter';
  btnEnter.textContent = 'Entrar';
  btnEnter.setAttribute('type', 'submit');

  const btnReturn = document.createElement('button');
  btnReturn.className = 'btn-return';
  btnReturn.textContent = 'Volver';
  btnReturn.setAttribute('type', 'button');
  btnReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  loginForm.append(logo, email, password, forgotPassword, btnEnter, btnReturn);
  main.append(title, loginForm);

  return main;
}

export default login;
