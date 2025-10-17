import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import Pagination from "@mui/material/Pagination"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
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
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {posts.map(({ node }) => (
            <Grid size={12}>
              <Card
                key={JSON.stringify(node)}
                onClick={() => navigate(`/blog/${node.frontmatter.slug}`)}
              >
                <div>{node.frontmatter.title}</div>
                <div>{node.frontmatter.date}</div>
                <div>{node.excerpt}</div>
              </Card>
            </Grid>
          ))}
          <Grid>
            <Pagination
              count={pageNum}
              defaultPage={curPage}
              onChange={(event, page) => handlePageChange(page)}
            />
          </Grid>
        </Grid>
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
