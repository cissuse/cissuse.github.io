import * as React from "react"

import Seo from "../../components/seo"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
const BlogPost = ({ data, children }) => {
  return (
    <Layout>
      <div>
        <p>{data.mdx.frontmatter.date}</p>
        {children}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
