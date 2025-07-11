
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../components/layout.css'
const IndexPage = () => (
  <Layout>
    hello world
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
