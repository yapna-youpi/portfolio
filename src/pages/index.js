import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import nightwind from "nightwind/helper"
import { StaticImage } from 'gatsby-plugin-image'


const Index = () => {
  return (
    <main className='m-6 px-8 py-4 bg-red-300 text-center'>
       <Layout pageTitle="Home Page">
       <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <h2 class="text-gray-900 dark:text-yellow-200">I'm yellow in dark mode</h2>
            <div className='mt-8'>
                <StaticImage 
                    width="100%" 
                    alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                    src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
                />
            </div>
       </Layout>
    </main>
  )
}

export default Index