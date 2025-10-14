import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby"
import Pagination from "@mui/material/Pagination"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
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
      <Grid container spacing={2}>
        {articleList.allMdx.edges.map(({ node }) => (
          <Grid size={12}>
            <Card key={JSON.stringify(node)} onClick={() => navigate(`/blog/${node.frontmatter.slug}`)}>
              <div>{node.frontmatter.title}</div>
              <div>{node.frontmatter.date}</div>
              <div>{node.excerpt}</div>
            </Card>
          </Grid>
        ))}
      </Grid>
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
