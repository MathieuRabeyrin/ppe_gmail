class ToastError {
  constructor(message) {
    this.message = message;
  }

  setMessage(message) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }

  /*
    Supprime le contenu de la div[role='alert']
  */
  #clearPreviousToast(div) {
    while (div.lastChild)
      div.lastChild.remove();
  }

  /*
    Ajoute les events au toast
  */
  #setEvent(div) {
    div.lastChild.addEventListener('click', () => {
      this.#clearPreviousToast(div);
      div.classList.remove('toast');
    });

    div.lastChild.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        this.#clearPreviousToast(div);
        div.classList.remove('toast');
      }
    });
  }

  display() {
    const div = document.querySelector("div[role='alert']");
    
    if (div.childElementCount > 0)
      this.#clearPreviousToast(div);
    
    // construction du toast
    div.classList.add('toast');
    const html = `<img src="./assets/alert.svg" alt="erreur">
                  <p>${this.message}</p>
                  <img tabindex="0" src="./assets/x.svg" alt="fermer">`;
    const fragment = document.createRange().createContextualFragment(html);
    document.documentElement.style.setProperty('--toastBgColor', '#eb0000');
    div.appendChild(fragment);
    this.#setEvent(div);
  }
}