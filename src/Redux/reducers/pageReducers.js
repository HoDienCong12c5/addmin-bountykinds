import { KEY_PAGE } from '../lib/constants'
import initState from '../lib/initState'
import createReducer from '../lib/reducerConfig'

export const internetRedux = createReducer(initState.internet, {
  [KEY_PAGE.SET_INTERNET](state, action) {
    return action.payload
  }
})
export const metamaskRedux = createReducer(initState.metamaskRedux, {
  [KEY_PAGE.SET_METAMASK_INFO](state, action) {
    return action.payload
  }
})
export const globalModal = createReducer(initState.globalModal, {
  [KEY_PAGE.SET_MODAL_GLOBAL](state, action) {
    return action.payload
  }
})
