import { modalConfig } from '@/Common/constants'
import { useWorkModal } from '@/Hook/useModal'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

const Home = () => {
  const { showModal } = useWorkModal()
  const openModal = () => {
    let modal = modalConfig

    showModal({
      body: <div>ok</div>,
      modalConfig: modal
    })

  }
  return (
    <div className='h-12 flex flex-col'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin Bountykinds </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      Home
      <Link to={'nft-detail/0x123234234'}
        state={{ some: 'home' }}
      >
        NFTDetail
      </Link>
      <div onClick={openModal}>
        openModal
      </div>
    </div>
  )
}

export default Home
