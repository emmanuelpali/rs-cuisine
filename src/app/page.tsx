import styles from './page.module.css'
import Hero from '../../components/Hero'
import Nav from '../../components/Nav'
import Menu from '../../components/Menu'
import Intro from '../../components/Intro'

export default function Home() {
  return (
    <>
    <div className='home'>     
      <Intro /> 
      <header>
        <Hero />
      </header>
      <main className={styles.main}>
        <Menu/>
      </main>
    </div>
    </>
  )
}
