import * as React from "react"

import Main from "../components/Main"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Main>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Main>
)

export default NotFoundPage
