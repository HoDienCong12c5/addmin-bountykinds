import ModalWrapper from '@/Components/MyModal'
import ChatBot from '@/Screen/ChatBot'
import Home from '@/Screen/Home'
import NFTDetail from '@/Screen/NFTDetail'
import { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './Header/header'
// import { dialogflow } from 'actions-on-google';
//page
// const Home = React.lazy(() => import('@/Screen/Home'))
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">dsajhdgashdas</div>
  </div>
)
const LayoutBasic = () => {
  return (
    <div className=' align-middle m-auto'>

      < Header />
      <div className='container basis-2xl m-auto pt-2.5'>
        <Suspense fallback={loading} >
          <Routes >
            <Route name="Home" index path="/" element={<Home />} errorElement={<div>error loaf page</div>} />
            <Route name="NFTDetail" path="/nft-detail/:userId" element={<NFTDetail />} errorElement={<div>error loaf page</div>} />
          </Routes>
        </Suspense>
      </div>
      <ChatBot />
      <ModalWrapper />
    </div >
  )
}
const Container = () => {
  return (
    <HashRouter >
      <Suspense fallback={loading} >
        <Routes >
          <Route index path="*" element={<LayoutBasic />} errorElement={<div>error loaf page</div>} />
        </Routes>
      </Suspense>
    </HashRouter>

  )
}

export default Container
