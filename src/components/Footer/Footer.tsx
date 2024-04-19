import styles from './Footer.module.css';

import logoWhite from '../../assets/logos/logoWhite.svg';

import iconFacebook from '../../assets/icons/icon-facebook.svg';
import iconYoutube from '../../assets/icons/icon-youtube.svg';
import iconTwitter from '../../assets/icons/icon-twitter.svg';
import iconPinterest from '../../assets/icons/icon-pinterest.svg';
import iconInstagram from '../../assets/icons/icon-instagram.svg';

import iconActiveFacebook from '../../assets/icons/icon-activeFacebook.svg';
import iconActiveYoutube from '../../assets/icons/icon-activeYoutube.svg';
import iconActiveTwitter from '../../assets/icons/icon-activeTwitter.svg';
import iconActivePinterest from '../../assets/icons/icon-activePinterest.svg';
import iconActiveInstagram from '../../assets/icons/icon-activeInstagram.svg';

import { SocialIcon } from './components/SocialIcon';
import { ButtonRequest } from '../ButtonRequest';

export const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.containerSocialMedias}>
        <img src={logoWhite} alt="EasyBank logo" />

        <div>
          <a href="https://www.facebook.com/" target="_blank">
            <SocialIcon activeIcon={iconActiveFacebook} icon={iconFacebook} alt='Facebook icon' />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <SocialIcon activeIcon={iconActiveYoutube} icon={iconYoutube} alt='Youtube icon' />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <SocialIcon activeIcon={iconActiveTwitter} icon={iconTwitter} alt='Twitter icon' />
          </a>
          <a href="https://www.pinterest.com/" target="_blank">
            <SocialIcon activeIcon={iconActivePinterest} icon={iconPinterest} alt='Pinterest icon' />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <SocialIcon activeIcon={iconActiveInstagram} icon={iconInstagram} alt='Instagram icon' />
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