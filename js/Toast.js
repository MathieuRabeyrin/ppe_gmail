class Toast {
  constructor(message, type) {
    this.message = message;
    this.type = type;
  }

  setMessage(message) {
    this.message = message;
  }

  setType(type) {
    this.type = type;
  }

  getMessage() {
    return this.message;
  }

  getType() {
    return this.type;
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
    const map  = {alert: '#eb0000', success: '#28a745'};
    
    if (div.childElementCount > 0)
      this.#clearPreviousToast(div);
    
    // construction du toast
    div.classList.add('toast');
    const html = `<img src="./assets/${this.type}.svg" alt="${this.type}">
                  <p>${this.message}</p>
                  <img tabindex="0" src="./assets/x.svg" alt="fermer">`;
    const fragment = document.createRange().createContextualFragment(html);
    document.documentElement.style.setProperty('--toastBgColor', map[this.type]);
    div.appendChild(fragment);
    this.#setEvent(div);
  }
}