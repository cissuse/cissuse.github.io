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
import AppTheme from "../theme/AppTheme"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
const Layout = ({ children }) => {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Header />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        {children}
      </Container>
    </AppTheme>
  )
}

export default Layout
