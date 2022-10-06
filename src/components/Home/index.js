// Home page component importing.. 
import Hero from '../Hero'
import HotBids from '../HotBids'
import TopSeller from '../TopSeller'

function Home() { 
  return (
    <div className='container mx-auto'>
      {/* Hero Section */}
      <Hero/>

      {/* TopSeller Section */}
      <TopSeller/>

      {/* Hot Bids Section */}
      <HotBids/>
    </div>
  )
}

export default Home
