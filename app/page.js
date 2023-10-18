import Image from 'next/image'
import RMLogo from './components/logo'
import CardContainer from './card-container'

export default function Home() {
  return (
    <main className={`pt-24 relative`}>
      <RMLogo/>
      <h1 className={`mt-20 uppercase text-5xl font-bold md:text-6xl lg:text-7xl`}>Currently Active<br/>Wordpress Sites</h1>
      <CardContainer/>
    </main>
  )
} 