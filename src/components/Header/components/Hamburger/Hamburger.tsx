import styles from './Hamburger.module.css';

import iconCloseHamburger from '../../../../assets/icons/icon-openHamburger.svg';
import iconOpenHamburger from '../../../../assets/icons/icon-closeHamburger.svg';

type HamburgerProps = {
    active: boolean;
    toggleMode: () => void;
}

export const Hamburger = ({active, toggleMode}: HamburgerProps) => {
    return (
        <>
            <div className={styles.Hamburger} onClick={toggleMode}>
                <img src={active ? iconCloseHamburger : iconOpenHamburger} alt="menu" width="24" height="11"/>
            </div>
        </>
    );
}