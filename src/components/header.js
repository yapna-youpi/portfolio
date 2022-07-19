import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navigation from "./Navigation"
import Banner from './Banner'

const Header = ({ siteTitle }) => (
  <div>
    <Navigation/>
    <Banner />
  </div>
)



export default Header
