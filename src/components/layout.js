/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import * as styles from "./index.module.css"
import "./layout.css"
import Articles from "./home/articles"
const Layout = ({ children }) => {
  return (
    <div className={styles.HomeLayout}>
      <div className={styles.HomeHeader}></div>
      <div className={styles.HomeInfo}>{children}</div>
      <div className={styles.HomeArticles}><Articles /></div>
    </div>
  )
}

export default Layout
