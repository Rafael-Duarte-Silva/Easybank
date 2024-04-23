import styles from './ButtonRequest.module.css';

type ButtonRequestProps = {
    className?: string
}

export const ButtonRequest = ({className}: ButtonRequestProps) => {
    return (
        <button className={`${styles.btnRequest} ${className}`}>
            Request Invite
        </button>
    )
}