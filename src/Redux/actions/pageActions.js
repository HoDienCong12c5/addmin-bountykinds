import { KEY_PAGE } from '../lib/constants'

export default class PageReduxAction {
  static setInternet(payload) {
    return {
      type: KEY_PAGE.SET_INTERNET,
      payload
    }
  }
  static setMetamask(payload) {
    return {
      type: KEY_PAGE.SET_METAMASK_INFO,
      payload
    }
  }
}
