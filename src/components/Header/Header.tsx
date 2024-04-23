import styles from './Header.module.css';

import logo from '../../assets/logos/logo.svg';

import { Hamburger } from './components/Hamburger';
import { ButtonRequest } from '../ButtonRequest';

type HeaderProps = {
  active: boolean;
  toggleMode: () => void;
}

export const Header = ({active, toggleMode}: HeaderProps) => {
  return (
    <header className={styles.containerHeader}>
      <img src={logo} alt="EasyBank logo" width="139" height="20"/>

      <nav className={styles.containerLinks}>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Careers</a></li>
        </ul>
      </nav>

      <Hamburger active={active} toggleMode={toggleMode}/>

      <ButtonRequest className={styles.btnActive}/>
    </header>
  );
}