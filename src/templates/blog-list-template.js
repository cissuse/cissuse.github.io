import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import * as styles from "../pages/index.module.css"
import { navigate } from "gatsby"
import Pagination from "@mui/material/Pagination"
export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMdx.edges
    const curPage = this.props.pageContext.currentPage
    const pageNum = this.props.pageContext.numPages
    const handlePageChange = cur => {
      if (cur === 1) {
        navigate("/")
      } else {
        navigate(`/${cur}`)
      }
    }
    return (
      <Layout>
        {posts.map(({ node }) => (
          <Link to={`/blog/${node.frontmatter.slug}`}>
            <div className={styles.articleItem} key={JSON.stringify(node)}>
              <div>{node.frontmatter.title}</div>
              <div>{node.frontmatter.date}</div>
              <div>{node.excerpt}</div>
            </div>
          </Link>
        ))}
        <Pagination
          count={pageNum}
          defaultPage={curPage}
          onChange={(event, page) => handlePageChange(page)}
        />
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query curArticles($skip: Int!, $limit: Int!) {
    allMdx(skip: $skip, limit: $limit) {
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
`
