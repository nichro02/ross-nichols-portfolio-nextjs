import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

//components
//import Spinner from './common/Spinner'

const Contact = () => {
    return(
        <Layout>
            <Head>
                <title>Contact Information</title>
            </Head>
            <h1>Contact Information</h1>
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

export default Contact