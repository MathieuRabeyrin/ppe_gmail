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

  display() {
    const div = document.querySelector('div');

    console.log(div);

    div.appendChild(document.createElement('p'));
    div.lastChild.innerText = this.message;
    div.lastChild.classList.add('toast', this.type);
  }
}