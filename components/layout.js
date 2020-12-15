import Link from 'next/link'

import styles from '../styles/Layout.module.css'


const Layout = ({ children }) => {
    return (
        <>
            <nav className={styles.navBar}>
                <div>
                    <div className={styles.navLinkHeader}>
                    <Link href='/'>
                        placeholder
                    </Link>
                    <span className={styles.navLinks}>
                    <Link href='/'>
                        Home
                    </Link>
                    <Link href='/about'>
                        About
                    </Link>
                    <Link href='/projects'>
                        Projects
                    </Link>
                    <Link href='/contact'>
                        Contact
                    </Link>
                    </span>
                    </div>
                    <div className={styles.introBlock}>
                        <h1 className={styles.greetingText}>Hi, I'm Ross. </h1>
                        <h2 className={styles.introText}>
                        I'm a software engineer who loves thinking about creative ways to solve problems
                        </h2>
                    </div>
                    
                </div>
            </nav>
            <div className={styles.container}>{children}</div>
            <footer className={styles.navBar}>
                <div>
                    <ul>
                    <Link href='/'>
                        Home
                    </Link>
                    <Link href='/about'>
                        About
                    </Link>
                    <Link href='/projects'>
                        Projects
                    </Link>
                    <Link href='/contact'>
                        Contact
                    </Link>
                    </ul>
                    <h6>Website created by Ross Nichols</h6>
                </div>
            </footer>
        </>
    )
}

export default Layout