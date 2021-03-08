document.addEventListener('DOMContentLoaded', () => {
  const btnSubmit = document.querySelector("input[type='submit'");

  while (localStorage.length > 0)
    localStorage.removeItem(localStorage.key(0))

  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const data = new FormData(document.querySelector('form'));
    const user = new Form(data.get('prenom'), data.get('nom'), data.get('mail'), data.get('password'));

    if (user.checkForm()) {
      new Toast('Compte créer', 'success').display();
      for (let [key, value] of data.entries())
        localStorage.setItem(key, value);
      setTimeout(() => {
        window.location = "connexion.html";
      }, 1000);
    }
  });
});