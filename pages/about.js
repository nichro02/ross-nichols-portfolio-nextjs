import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

//components
//import Spinner from './common/Spinner'

const About = () => {
    return(
        <Layout>
            <Head>
                <title>About Me</title>
            </Head>
            <div>About goes here</div>
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