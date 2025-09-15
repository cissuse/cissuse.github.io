/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import * as styles from "./index.module.css"
import "./layout.css"
import Info from "./home/info"
import Header from "./home/header"

const Layout = ({ children }) => {
  return (
    <div className={styles.HomeLayout}>
      <div className={styles.HomeHeader}>
        <div>
          <Header />
        </div>
      </div>
      <div className={styles.HomeInfo}>
        <div className={styles.InfoContainer}>
          <Info />
        </div>
      </div>
      <div className={styles.HomeArticles}>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
