import styles from './Footer.module.css';

import logoWhite from '../../assets/logoWhite.svg';

import iconFacebook from '../../assets/icon-facebook.svg';
import iconYoutube from '../../assets/icon-youtube.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import iconPinterest from '../../assets/icon-pinterest.svg';
import iconInstagram from '../../assets/icon-instagram.svg';

import { ButtonRequest } from '../ButtonRequest';

export const Footer = () => {
    return (
        <footer className={styles.containerFooter}>
        <div className={styles.containerSocialMedias}>
          <img src={logoWhite} alt="logo da EasyBank" />

          <div>
            <a href="">
              <img src={iconFacebook} alt="icone do Facebook" />
            </a>
            <a href="">
              <img src={iconYoutube} alt="icone do Youtube" />
            </a>
            <a href="">
              <img src={iconTwitter} alt="icone do Twitter" />
            </a>
            <a href="">
              <img src={iconPinterest} alt="icone do Pinterest" />
            </a>
            <a href="">
              <img src={iconInstagram} alt="icone do Instagram" />
            </a>
          </div>
        </div>

        <div className={styles.containerFooterLinks}>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Support</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>

        <div className={styles.containerCredits}>
          <ButtonRequest/>

          <address>
            © Easybank. All Rights Reserved
          </address>
        </div>
      </footer>
    );
}