document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('prenom')) {
    const title = document.querySelector('h1');
    title.innerText += ` ${localStorage.getItem('prenom')}`;
  }
  
  if (localStorage.getItem('mail')) {
    const mail = document.getElementById('mail');
    mail.value = localStorage.getItem('mail');
  }
});