/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import Header from "./header"
import * as styles from "./index.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.HomePage}>
      <Header siteTitle={`cissuse's blog`} />
      <div className={styles.ArcticList}>{children}</div>
      <div className={styles.SideInfo}>{children}</div>
    </div>
  )
}

export default Layout
