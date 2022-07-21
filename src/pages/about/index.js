import * as React from "react"
import { Link } from "gatsby"
import Main from '../../components/Main'
import { StaticImage } from 'gatsby-plugin-image'

// import Layout from "../components/layout"
// import Seo from "../components/seo"

const SecondPage = () => (
  <div>
    <Main pageTitle="Home Page">
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
        <h2 class=" dark:text-yellow-200">I'm yellow in dark mode</h2>
        <div className='mt-8'>
            <StaticImage 
                width="100%" 
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
            />
        </div>
    </Main>
  </div>
)

export default SecondPage
