import styles from './Menu.module.css';

type MenuProps = {
    active: boolean
};

export const Menu = ({active}: MenuProps) => {
    return (
        <div className={active ? `${styles.menu} ${styles.active}` : styles.menu}>
            <div>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};