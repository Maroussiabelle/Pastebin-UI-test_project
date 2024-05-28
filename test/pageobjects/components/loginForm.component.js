import {$} from '@wdio/globals'

const selectors = {
  username: '#loginform-username',
  password: '#loginform-password',
  loginButton: 'form[action="/login"] button[type="submit"]',

}


export default class LoginFormComponent {
  get rootEl() {
    return $('form#w0.form-horizontal')
  }

  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
