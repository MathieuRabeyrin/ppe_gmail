document.addEventListener('DOMContentLoaded', () => {
  const btnSubmit = document.querySelector("input[type='submit']");
  const mailInput = document.querySelector("input[type='email']");
  localStorage.clear();

  btnSubmit.addEventListener('click', (e) => {
    const data = new FormData(document.querySelector('form'));
    const user = new Form(data.get('prenom'), data.get('nom'), data.get('mail'), data.get('password'));

    if (user.checkForm()) {
      localStorage.setItem('prenom', data.get('prenom'));
      localStorage.setItem('mail', data.get('mail'));
    } else
      e.preventDefault();
  });

  mailInput.addEventListener('change', () => {
    Form.isMailUsed(mailInput.value);
  });
});