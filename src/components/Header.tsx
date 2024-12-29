import rocket from '../assets/rocket.svg';
import styles from './Header.module.css';


export function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img src={rocket} alt="Rocket" />
        <h1>to<span>do</span></h1>
      </div>
    </header>
  )
}