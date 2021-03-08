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

  checkForm() {
    if (this.#isEmpty()) {
      new ToastError('Les champs sont obligatoires').display();
      return false;
    }
    if (!this.#checkMail()) {
      new ToastError('Email invalide').display();
      return false;
    }
    return true;
  }
}