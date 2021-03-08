document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('h2');

  if (localStorage.getItem('prenom'))
    title.innerText += ` ${localStorage.getItem('prenom')}`;
});