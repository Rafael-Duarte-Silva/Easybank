import styles from './Benefits.module.css';

import iconOnline from '../../assets/icons/icon-online.svg';
import iconBudgeting from '../../assets/icons/icon-budgeting.svg';
import iconOnboarding from '../../assets/icons/icon-onboarding.svg';
import iconApi from '../../assets/icons/icon-api.svg';

type BenefitsList = Array<{url: string, title: string, text: string}>;

export const Benefits = () => {
    const benefitsList: BenefitsList = [
        {
            url: iconOnline,
            title: 'Online Banking',
            text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
        },
        {
            url: iconBudgeting,
            title: 'Simple Budgeting',
            text: 'See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits.',
        },
        {
            url: iconOnboarding,
            title: 'Fast Onboarding',
            text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
        },
        {
            url: iconApi,
            title: 'Open API',
            text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
        }
    ];

    return benefitsList.map((benefit, index) => (
        <section className={styles.benefit} key={index}>
            <img src={benefit.url} alt={`example image: ${benefit.title}`} />
            <h1>{benefit.title}</h1>
            <p>{benefit.text}</p>
        </section>
    ));
}