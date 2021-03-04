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

  #removeChilds(div) {
    while (div.lastChild)
      div.lastChild.remove();
  }

  #setEvent(div) {
    div.lastChild.addEventListener('click', () => {
      this.#removeChilds(div);
      div.classList.remove('toast');
    });

    div.lastChild.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        this.#removeChilds(div);
        div.classList.remove('toast');
      }
    });
  }

  display() {
    const div = document.querySelector("div[role='alert']");
    const map  = {alert: '#dd5347', success: '#28a745'};
    
    if (div.childElementCount > 0)
      this.#removeChilds(div);

    div.classList.add('toast');
    div.appendChild(document.createElement('img'));
    div.lastChild.src = `./assets/${this.type}.svg`;
    div.lastChild.alt = this.type;
    div.appendChild(document.createElement('p'));
    div.lastChild.innerText = this.message;
    div.appendChild(document.createElement('img'));
    div.lastChild.src = "./assets/x.svg";
    div.lastChild.alt = "fermer";
    div.lastChild.tabIndex = 0;
    document.documentElement.style.setProperty('--toastBgColor', map[this.type]);
    this.#setEvent(div);
  }
}