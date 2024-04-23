import styles from './ContainerLastArticles.module.css';

import { Articles } from './components/Articles';

export const ContainerLastArticles = () => {
    return (
        <section className={styles.containerLastArticles}>
          <h1>Latest Articles</h1>

          <Articles/>
        </section>
    );
}