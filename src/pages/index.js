import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./index.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Pagination } from 'antd';
import { navigate } from "gatsby"
const IndexPage = () => {
  const articleList = useStaticQuery(graphql`
    query {
      allMdx(limit: 1, skip: 0) {
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
  const handlePageChange = cur => {
    if(cur === 1) {
      navigate('/')
    } else {
      navigate(`/${cur}`)
    }
  }
  return (
    <Layout>
      <div>
        <Pagination defaultCurrent={1} total={3} pageSize={1} onChange={handlePageChange}/>
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
