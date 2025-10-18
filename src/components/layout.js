/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import AppTheme from "../theme/AppTheme"
import "./layout.css"
import Stack from "@mui/material/Stack"
import Card from "@mui/material/Card"
import Header from "./home/header"
import Container from "@mui/material/Container"
import Info from "./home/info"
import Box from "@mui/material/Box"
const Layout = ({ children }) => {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Stack
        direction="row"
        spacing={2}
        sx={{ height: "100vh", width: "100vw", padding: 1 }}
      >
        <Card
          sx={{
            width: "250px",
            height: "100%",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
          only="sm"
        >
          <Info />
        </Card>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            overflow: "auto",
          }}
        >
          <Header />
          {children}
        </Box>
      </Stack>
    </AppTheme>
  )
}

export default Layout
