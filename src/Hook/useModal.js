import ReduxService from '@/Utils/reduxService'
import { useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

export const useModal = () => {
  return {
    modal: useSelector(state => state.globalModal, shallowEqual)
  }
}
export const useWorkModal = props => {
  const dispatch = useDispatch()
  const showModal = useCallback(
    (params = {}) => {
      ReduxService.openModal(props, params)
    },
    [props, dispatch]
  )
  const hideModal = useCallback(() => {
    ReduxService.closeModal()
  }, [dispatch])
  return {
    showModal,
    hideModal
  }
}

