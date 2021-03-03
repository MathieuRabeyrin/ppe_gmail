document.addEventListener('DOMContentLoaded', () => {
  const btnIcon = document.querySelector('nav > a');

  const changeIcon = (name, id) => {
    btnIcon.firstChild.src = `./assets/${name}`;
    btnIcon.href = id;
  }

  window.addEventListener('scroll', () => {
    if (window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight)
      changeIcon("arrow_up.svg", "#");
    else
      changeIcon("arrow_down.svg", "#create");
  });
});