import {$} from '@wdio/globals'

export default class GoogleAd {
  async tryClose() {
    try {
      await $('vli.vliIgnore').click()
    } catch (ignored) {
    }
  }
}
