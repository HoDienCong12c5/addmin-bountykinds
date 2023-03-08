import { useLocation } from 'react-router-dom';
const NFTDetail = () => {
  const { state } = useLocation();
  const x = useLocation();
  console.log('====================================');
  console.log({ state });
  console.log('====================================');
  return (
    <div>NFTDetail - {state?.some}</div>
  )
}

export default NFTDetail
