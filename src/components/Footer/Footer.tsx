import styles from './Footer.module.css';

import logoWhite from '../../assets/logos/logoWhite.svg';

import { IconFacebook } from './components/IconFacebook';
import { IconYoutube } from './components/IconYoutube';
import { IconTwitter } from './components/IconTwitter';
import { IconPinterest } from './components/IconPinterest';
import { IconInstagram } from './components/IconInstagram';
import { ButtonRequest } from '../ButtonRequest';

export const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.containerSocialMedias}>
        <img src={logoWhite} alt="EasyBank logo" loading="lazy" width="139" height="20"/>

        <div>
          <a href="https://www.facebook.com/" target="_blank">
            <IconFacebook/>
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <IconYoutube/>
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <IconTwitter/>
          </a>
          <a href="https://www.pinterest.com/" target="_blank">
            <IconPinterest/>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <IconInstagram/>
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
        <ButtonRequest />

        <address>
          © Easybank. All Rights Reserved
        </address>
      </div>
    </footer>
  );
}