import styles from './page.module.css'
import Hero from '../../components/Hero'
import Nav from '../../components/Nav'
import Menu from '../../components/Menu'

export default function Home() {
  return (
    <div className='home'>
      <Nav />
      <header>
        <Hero />
      </header>
      <main className={styles.main}>
        <Menu/>
      </main>
    </div>
  )
}
