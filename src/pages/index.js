import React,{useState,useEffect} from 'react'
// import { Link } from 'gatsby'
import Main from '../components/Main'
import nightwind from "nightwind/helper"
import { StaticImage } from 'gatsby-plugin-image'


const Index = () => {
  
  const [data, setdata] = useState()
  
  useEffect(() => {
    fetch(`https://geekflare.com/fr/finance/best-currency-exchange-apis/`)
        .then((response) => response.json())
        .then(({ surveyData }) => console.log(surveyData))
        .catch((error) => console.log(error))

       
    
  }, [data])

  return (
    <main className=''>
       <Main pageTitle="stallone portFolio">

            {/* <p>I'm making this by following the Gatsby Tutorial.</p>
            <h2 class="text-gray-900 dark:text-yellow-200">I'm yellow in dark mode</h2>
            <div className='mt-8'>
                <StaticImage 
                    width="100%" 
                    alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                    src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
                />
            </div> */}
       </Main>
    </main>
  )
}

export default Index