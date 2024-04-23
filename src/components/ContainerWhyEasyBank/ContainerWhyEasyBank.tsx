import styles from './ContainerWhyEasyBank.module.css';

import { Benefits } from './components/Benefits';

export const ContainerWhyEasyBank = () => {
    return (
        <section className={styles.containerWhyEasyBank}>
          <h1>
            Why choose Easybank?
          </h1>
          <p>
            We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.
          </p>

          <Benefits/>
        </section>
    );
}