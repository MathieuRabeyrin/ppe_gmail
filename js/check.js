document.addEventListener('DOMContentLoaded', () => {
  const btnSubmit = document.querySelector("input[type='submit'");
  localStorage.clear();

  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const data = new FormData(document.querySelector('form'));
    const user = new Form(data.get('prenom'), data.get('nom'), data.get('mail'), data.get('password'));

    if (user.checkForm()) {
      new Toast('Compte créer', 'success').display();
      localStorage.setItem('prenom', data.get('prenom'));
      localStorage.setItem('mail', data.get('mail'));
      setTimeout(() => {
        window.location = "connexion.html";
      }, 1000);
    }
  });
});