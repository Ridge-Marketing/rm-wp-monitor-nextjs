import Image from 'next/image'
import RMLogo from './components/logo'

// v1
// import CardContainer from './card-container'

import MainContent from './main-content'

export default function Home() {

  return (
    <main className={`pt-14 relative`}>
      <div className='main'>
        <RMLogo/>
        <h1 className={`mt-14 uppercase text-5xl font-bold md:text-6xl`}>Currently Active<br/>Wordpress Sites</h1>
        {/* <CardContainer/> */}  
      </div>
      <MainContent/>
    </main>
  )
} 