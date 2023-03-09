export const METAMASK_INFO = {
  status: {
    Loading: 'loading',
    NoWeb3: 'noweb3',
    Error: 'error',
    Locked: 'locked',
    ChangeAccount: 'changeaccount',
    Ready: 'ready'
  },
  network: {
    1: 'Mainnet',
    2: 'Morden',
    3: 'Ropsten',
    4: 'Rinkeby',
    42: 'Kovan',
    56: 'Binance Smart Chain Mainnet',
    97: 'Binance Smart Chain Testnet',
    88: 'TomoChain Mainnet',
    89: 'TomoChain Testnet',
    5777: 'Private'
  }
}
export const modalConfig = {
  wrapClassName: '',
  width: 500,
  //click over modal to close
  outsideClose: true,
  isDisableIcon: false,
  //show icon close modal
  showIconClose: true,
  maskStyle: {},
  title: null,
  footer: null,
  //click esc modal to close
  enterESC: true
}
export const paramModal = {
  body: null,
  modalConfig: modalConfig
}
