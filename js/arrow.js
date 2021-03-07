// fichier pour l'animation de l'arrow

document.addEventListener('DOMContentLoaded', () => {
  const btnIcon = document.querySelector('nav > a');

  window.addEventListener('scroll', () => {
    if (window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight) {
      btnIcon.firstChild.classList.add('rotation');
      btnIcon.firstChild.classList.remove('resetRotation');
      btnIcon.setAttribute('href', '#');
    } else {
      if (btnIcon.firstChild.classList.contains('rotation'))
        btnIcon.firstChild.classList.add('resetRotation');
      btnIcon.firstChild.classList.remove('rotation');
      btnIcon.setAttribute('href', '#create');
    }
  });
});