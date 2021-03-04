document.addEventListener('DOMContentLoaded', () => {
  const btnSubmit = document.querySelector("input[type='submit'");
  
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const data = new FormData(document.querySelector('form'));
    const user = new Form(data.get('prenom'), data.get('nom'), data.get('mail'), data.get('password'));

    if (user.checkForm()) {
      new Toast('Compte créer', 'success').display();
    }
  });
});