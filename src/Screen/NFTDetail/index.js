import { useState } from 'react';
import Helmet from 'react-helmet';
import { useLocation } from 'react-router-dom';
// import io from 'socket.io-client';
const NFTDetail = () => {

  const { state } = useLocation();
  // const x = useLocation();


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>

      </div>

    </>
  )
}

export default NFTDetail
