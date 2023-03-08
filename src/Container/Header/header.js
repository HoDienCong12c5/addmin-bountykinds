import Media from 'react-media';
import { Link } from 'react-router-dom';
import './style.scss';
const Header = () => {
  const renderDesktop = () => {
    return (
      <div className='container basis-2xl h-12 items-center flex flex-row m-auto'>
        <div className='basis-24'>
          <Link to={''} >
            logo
          </Link>
        </div>

        <div className='flex text-left'>
          <Link to={'nft-detail/0x123234234'}
            state={{ some: 'home' }}
          >
            NFTDetail
          </Link>
        </div>
      </div>
    )
  }
  const renderMobile = () => {
    return (
      <></>
    )
  }
  return (
    <div className='h-12 bg-neutral-50 shadow-md items-center'>
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop('20%')
          }
          return renderMobile()
        }}
      </Media>
    </div>

  )
}

export default Header
