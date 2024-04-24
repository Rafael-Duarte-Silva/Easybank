import styles from './Hamburger.module.css';

import { IconCloseHamburger } from './components/IconCloseHamburger';
import { IconOpenHamburger } from './components/IconOpenHamburger';

type HamburgerProps = {
    active: boolean;
    toggleMode: () => void;
}

export const Hamburger = ({active, toggleMode}: HamburgerProps) => {
    return (
        <>
            <div className={styles.Hamburger} onClick={toggleMode}>
                {active ? <IconOpenHamburger/> : <IconCloseHamburger/>}
            </div>
        </>
    );
}