import styles from '../styles/Layout.module.css'
import Link from 'next/link'

const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <div>
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
                </div>
            </nav>
            <div className={styles.container}>{children}</div>
        </>
    )
}

export default Layout