document.addEventListener('DOMContentLoaded', () => {
  const btnIcon = document.querySelector('nav > a');


  const rotateIcon = (className, link) => {
    btnIcon.href = link;
    btnIcon.firstChild.classList.toggle('rotation');
  }

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