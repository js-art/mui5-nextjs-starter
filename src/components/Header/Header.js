import styles from './Header.module.scss'
const Header = () => {
    return (
        <header className={styles.header}>
            <p>
                Colby&apos;s Store
            </p>
            <p>
                $0.00
            </p>
        </header>
    )
}
export default Header