import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./index.module.css"
import { Link } from "gatsby"
function Articles() {
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
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
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
  )
}

export default Articles
