class Form {
  constructor(firstName, lastName, mail, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.password = password;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  setMail(mail) {
    this.mail = mail;
  }

  setPassword(password) {
    this.password = password;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getMail() {
    return this.mail;
  }

  getPassword() {
    return this.password;
  }

  #checkMail() {
    let expr = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    return expr.test(this.mail);
  }

  #isEmpty() {
    for (let key in this)
      if (this[key].length == 0)
        return true;
    return false;
  }

  static setEvent(div) {
    div.lastElementChild.addEventListener('click', () => {
      div.classList.add('hide');
    });

    div.lastElementChild.addEventListener('keydown', (e) => {
      if (e.key == 'Enter')
        div.classList.add('hide');
    });
  }

  static setAlertText(text) {
    const div = document.querySelector("div[role='alert']");
    const alertText = document.querySelector("div[role='alert'] > p");
    Form.setEvent(div);
    alertText.innerText = text;
    div.classList.remove('hide');
  }

  static hideAlert() {
    const div = document.querySelector("div[role='alert']");
    div.classList.add('hide');
  }

  static isMailUsed(mail) {
    fetch(`./src/mail.inc.php?mail=${mail}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data?.isUsed === '1')
          Form.setAlertText("Email deja utilise");
        else
          Form.hideAlert();
      });
  }

  checkForm() {
    if (this.#isEmpty()) {
      Form.setAlertText("Les champs sont obligatoires");
      return false;
    }
    if (!this.#checkMail()) {
      Form.setAlertText("Email invalide");
      return false;
    }
    return true;
  }
}