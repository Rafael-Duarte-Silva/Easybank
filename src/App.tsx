import styles from './App.module.css';

import mockups from './assets/images/image-mockups.png';

import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { ButtonRequest } from './components/ButtonRequest';
import { Benefits } from './components/Benefits';
import { Articles } from './components/Articles';
import { Footer } from './components/Footer';

import { useHamburger } from './hooks/useHamburger';

export const App = () => {
  const { active, toggleMode } = useHamburger();

  return (
    <>
      <Header active={active} toggleMode={toggleMode}/>

      <Menu active={active}/>

      <main>
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

          <img src={mockups} alt="example image" />
        </div>

        <section className={styles.containerWhyEasyBank}>
          <h1>
            Why choose Easybank?
          </h1>
          <p>
            We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.
          </p>

          <div className={styles.containerBenefits}>
            <Benefits/>
          </div>
        </section>

        <section className={styles.containerLastArticles}>
          <h1>Latest Articles</h1>

          <div className={styles.containerArticles}>
            <Articles/>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  )
}