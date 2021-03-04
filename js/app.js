document.addEventListener('DOMContentLoaded', () => {
  const btnIcon = document.querySelector('nav > a');

  window.addEventListener('scroll', () => {
    if (window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight) {
      btnIcon.firstChild.classList.add('rotation');
      btnIcon.href = "#";
    } else {
      btnIcon.firstChild.classList.remove('rotation');
      btnIcon.href = "#create";
    }
  });
});