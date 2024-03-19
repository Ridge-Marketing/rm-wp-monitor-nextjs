import Image from 'next/image'
import RMLogo from './components/logo'

import MainContent from './main-content'

export default function Home() {

  return (
    <main className={`pt-14 relative`}>
      <div className='main'>
        <div className='flex justify-center max-w-full'>
          <RMLogo/>
        </div>
        <h1 className={`my-14 uppercase text-5xl font-bold md:text-6xl text-[#A9CF38] text-center`}>Currently Active Wordpress Sites</h1>
      </div>
      <MainContent/>
    </main>
  )
} 