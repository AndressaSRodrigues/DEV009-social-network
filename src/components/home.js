function home() {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonIng = document.createElement('button');
  buttonIng.textContent = 'Iniciar Sesión';
  title.textContent = 'Bienvenida al SpookyVerse';
  section.append(title, buttonIng);
  return section;
}

export default home;
