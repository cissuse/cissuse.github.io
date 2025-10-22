import React from "react"
import Layout from "../../../components/layout"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import ArticleInfo from "../../../components/home/articleInfo"
import Grid from "@mui/material/Grid"
function ByArticleTag() {
  const articleList = useStaticQuery(graphql`
    query {
      allMdx {
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
  const location = useLocation()
  const stateParams = location.state || {tags: []}
  const stateArray = Array.from(stateParams.tags)
  const curArticles = articleList.allMdx.edges
  const filterArticles = curArticles.filter(node =>
    stateArray.includes(node.node.frontmatter.tag)
  )
  return (
    <Layout>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {filterArticles.map(({ node }) => (
          <Grid key={node.id} size={12}>
            <ArticleInfo
              tag={node.frontmatter.tag}
              slug={node.frontmatter.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export default ByArticleTag
