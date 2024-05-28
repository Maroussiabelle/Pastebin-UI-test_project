import Header from '../components/common/header.component.js';
import LoginFormComponent from '../components/loginForm.component.js';
import {$} from '@wdio/globals';

export default class LoginPage {
  constructor() {
    this.header = new Header();
    this.loginForm = new LoginFormComponent();
  }

  async login(login, password) {
    await $(this.header.item('loginButton')).click();
    await $(this.loginForm.item('username')).setValue(login);
    await $(this.loginForm.item('password')).setValue(password);
    await $(this.loginForm.item('loginButton')).click();
  }
}
