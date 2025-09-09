import * as React from 'react'

import Seo from '../../components/seo'
import { graphql } from 'gatsby'

const BlogPost = ({ data, children }) => {
  return (
    <div>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost