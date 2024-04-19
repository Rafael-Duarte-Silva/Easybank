import styles from './Articles.module.css';

import imageCurrency from '../../assets/images/image-currency.jpg';
import imageRestaurant from '../../assets/images/image-restaurant.jpg';
import imagePlane from '../../assets/images/image-plane.jpg';
import imageConfetti from '../../assets/images/image-confetti.jpg';

type ArticlesList = Array<{ url: string, author: string, title: string, text: string }>;

export const Articles = () => {
    const articlesList: ArticlesList = [
        {
            url: imageCurrency,
            author: 'By Claire Robinson',
            title: 'Receive money in any currency with no fees',
            text: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
        },
        {
            url: imageRestaurant,
            author: 'By Wilson Hutton',
            title: 'Treat yourself without worrying about money',
            text: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
        },
        {
            url: imagePlane,
            author: 'By Wilson Hutton',
            title: 'Take your Easybank card wherever you go',
            text: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
        },
        {
            url: imageConfetti,
            author: 'By Claire Robinson',
            title: 'Our invite-only Beta accounts are now live!',
            text: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
        }
    ];

    return (
        <div className={styles.containerArticles}>
            {
                articlesList.map((article, index) => (
                    <section className={styles.article} key={index}>
                        <img src={article.url} alt="notice image" />
                        <div>
                            <address rel="author">{article.author}</address>
                            <a href="">
                                <h1>{article.title}</h1>
                            </a>
                            <p>{article.text}</p>
                        </div>
                    </section>
                ))
            }
        </div>
    )
};