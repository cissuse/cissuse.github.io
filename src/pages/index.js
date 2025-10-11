import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./index.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import Pagination from "@mui/material/Pagination"
const PAGE_SIZE = 1
const IndexPage = () => {
  const articleList = useStaticQuery(graphql`
    query {
      allMdx(limit: 1, skip: 0) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              date
              slug
              title
            }
            excerpt
          }
        }
      }
    }
  `)
  const articleNum = articleList.allMdx.totalCount
  const pageNum = Math.ceil(articleNum / PAGE_SIZE)

  const handlePageChange = cur => {
    if (cur === 1) {
      navigate("/")
    } else {
      navigate(`/${cur}`)
    }
  }

  return (
    <Layout>
      <div>
        {articleList.allMdx.edges.map(({ node }) => (
          <Link to={`/blog/${node.frontmatter.slug}`}>
            <div className={styles.articleItem} key={JSON.stringify(node)}>
              <div>{node.frontmatter.title}</div>
              <div>{node.frontmatter.date}</div>
              <div>{node.excerpt}</div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        count={pageNum}
        defaultPage={1}
        onChange={(event, page) => handlePageChange(page)}
      />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
