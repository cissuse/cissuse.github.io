import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby"
import Pagination from "@mui/material/Pagination"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import ArticleInfo from "../components/home/articleInfo"

const PAGE_SIZE = 1
const IndexPage = () => {
  const articleList = useStaticQuery(graphql`
    query {
      allMdx(limit: 30, skip: 0) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              date
              slug
              title
              tag
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
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {articleList.allMdx.edges.map(({ node }) => (
          <Grid size={12}>
            <ArticleInfo
              tag={node.frontmatter.tag}
              slug={node.frontmatter.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          </Grid>
        ))}
        <Grid>
          <Pagination
            count={pageNum}
            defaultPage={1}
            onChange={(event, page) => handlePageChange(page)}
          />
        </Grid>
      </Grid>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
