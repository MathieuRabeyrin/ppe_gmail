document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    if (window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight)
      console.log("bas de page");
    if (window.pageYOffset == 0)
      console.log("haut de page");
  });
});