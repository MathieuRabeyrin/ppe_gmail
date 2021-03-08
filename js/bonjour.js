document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('prenom')) {
    const title = document.querySelector('h2');
    title.innerText += ` ${localStorage.getItem('prenom')}`;
  }
  
  if (localStorage.getItem('mail')) {
    const mail = document.getElementById('mail');
    mail.value = localStorage.getItem('mail');
  }
});