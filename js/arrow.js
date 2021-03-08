// fichier pour l'animation de l'arrow

document.addEventListener('DOMContentLoaded', () => {
  const btnIcon = document.getElementsByClassName('arrow')[0];

  window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
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