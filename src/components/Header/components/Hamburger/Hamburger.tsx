import styles from './Hamburger.module.css';

import iconCloseHamburger from '../../../../assets/icon-openHamburger.svg';
import iconOpenHamburger from '../../../../assets/icon-closeHamburger.svg';

type HamburgerProps = {
    active: boolean;
    toggleMode: () => void;
}

export const Hamburger = ({active, toggleMode}: HamburgerProps) => {
    return (
        <>
            <div className={styles.Hamburger} onClick={toggleMode}>
                <img src={active ? iconCloseHamburger : iconOpenHamburger} alt="menu" />
            </div>
        </>
    );
}