import React from 'react'
import Link from 'next/link'

//components
//import Spinner from './common/Spinner'

const Contact = () => {
    return(
        <>
        <div>Contact info goes here</div>
        <h6>
            <Link href='/'>
                <a>
                    &larr; Back to homepage
                </a>
            </Link>
        </h6>
        </>
    )
}

export default Contact