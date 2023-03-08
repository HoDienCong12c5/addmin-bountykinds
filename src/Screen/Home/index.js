import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-12'>
      Home
      <Link to={'nft-detail/0x123234234'}
        state={{ some: 'home' }}
      >
        NFTDetail
      </Link>
    </div>
  )
}

export default Home
