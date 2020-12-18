import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

//components
//import Spinner from './common/Spinner'

const About = () => {
    return(
        <Layout>
            <Head>
                <title>About Me</title>
            </Head>

            <div className={styles.textBox}>
                <div>
                    <h1>About Me</h1>
                    <div>
                        
                        <div>
                            <p>I am a software engineer located in Denver. I started my career as an English instructor in South Korea, and have over six years of experience in strategic consultant roles. These roles have helped me develop a creative approach to problem-solving, sharpen my ability to set and manage expectations, and understand the importance of catering communications to my intended audience.  
                            </p>
                            <p>When I'm not coding, I read as much as I can, see as much of the world as possible, try new foods, play Ultimate Frisbee, and run.</p>
                        </div>
                    </div>
                </div>
            </div>
            <h6>
                <Link href='/'>
                    <a>
                        &larr; Back to homepage
                    </a>
                </Link>
            </h6>
        </Layout>
    )
}

export default About