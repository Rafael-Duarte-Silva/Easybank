import styles from './ContainerHome.module.css';

import mockups from '../../assets/images/image-mockups.png';

import { ButtonRequest } from '../ButtonRequest';

export const ContainerHome = () => {
    return (
        <div className={styles.containerHome}>
          <section>
            <h1>
              Next generation digital banking
            </h1>
            <p>
              Take your financial life online. Your Easybank account will be a one-stop-shop 
              for spending, saving, budgeting, investing, and much more.
            </p>
            
            <ButtonRequest/>
          </section>

          <img src={mockups} alt="example image" width="767" height="939"/>
        </div>
    );
}