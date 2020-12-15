import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Link from 'next/link'

//components
//import Spinner from './common/Spinner'

const Projects = () => {
    //initialize state to be used when fetching repos
    const [data, setData] = useState([])
    //initialize state for loader
    const [loading, setLoading] = useState(true)

    //retrieve Github repos amd set state
    useEffect(() => {
        axios.get('https://api.github.com/users/nichro02/repos').then((res) => {
          console.log(res.data)
          setData(res.data)
        }).then(() => setLoading(false))
      }, [])

      const display = () => {
    
        if(loading) {
          {/*return <Spinner />*/}
          return <h1>Page Loading</h1>
        } else {
          return data.map((card) => (
          
            <div key={card.id} className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{card.name}</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          
          ))
        }
      }  

    
    return(
        <>
        <div>Projects go here</div>
        <div className="container">
            <div className="row">{display()}</div>
        </div>
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

export default Projects