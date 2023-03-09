import { useModal, useWorkModal } from '@/Hook/useModal'
import { lazy, Suspense } from 'react'

import { Modal, Spin } from 'antd'
// import images from 'utils/images'

const ModalWrapper = () => {
  // Get modal params from redux store
  const { modal } = useModal()
  const { hideModal } = useWorkModal()
  // Import dynamic component according to component path param
  const CustomComponent = lazy(() => import(`${modal.componentPath}`))
  // const CustomComponent = lazy(() => import(`pages/sample1/components/SampleModalContent`))

  const defaultModalConfig = {
    wrapClassName: '',
    width: 500,
    maskClosable: true,
    isDisableIcon: false,
    closable: true,
    maskStyle: {},
    title: null,
    footer: null
  }

  return (

    <Modal
      {...defaultModalConfig}
      {...modal?.modalConfig}
      closable={modal?.modalConfig?.showIconClose}
      maskClosable={modal?.modalConfig?.outsideClose}
      keyboard={modal?.modalConfig?.enterESC}
      centered
      open={modal?.show}
      onCancel={hideModal}
    // closeIcon={<img src={images.icClose} />}
    >
      <Suspense fallback={<Spin />}>
        {
          modal?.componentPath
            ? (
              <CustomComponent {...modal.componentProps} />
            )
            : (
              modal?.body
            )
        }
      </Suspense>
    </Modal>
  )
}
export default ModalWrapper
