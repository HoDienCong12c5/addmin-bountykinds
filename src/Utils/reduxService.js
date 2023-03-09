import PageReduxAction from '@/Redux/actions/pageActions';
import storeRedux from '@/Redux/store/configureStore';

const ReduxService = {
  callDispatchAction: (action) => {
    storeRedux.dispatch(action)
  },
  setMetamask: (metaMask) => {
    ReduxService.callDispatchAction(PageReduxAction.setMetamask(metaMask))
  },
  openModal: (props, params) => {
    ReduxService.callDispatchAction(PageReduxAction.setGlobalModal({ ...props, ...params, show: true }))
  },
  closeModal: () => {
    ReduxService.callDispatchAction(PageReduxAction.setGlobalModal({ show: false }))
  },

}
export default ReduxService;
