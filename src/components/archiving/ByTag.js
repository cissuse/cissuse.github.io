import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
function ByTag() {
  const tagInfo = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              tag
            }
          }
        }
      }
    }
  `)
  let tagMap = new Map()
  try {
    const tags = tagInfo.allMdx.edges.map(temp => temp.node.frontmatter.tag)
    tags.forEach(tag => {
      const curTags = tag.split(",")
      curTags.forEach(cur => {
        if (tagMap.has(cur)) {
          tagMap.get(cur).add(tag)
        } else {
          const tagSet = new Set()
          tagSet.add(tag)
          tagMap.set(cur, tagSet)
        }
      })
    })
  } catch (error) {
    console.log("error:", error)
  }
  return (
    <Box maxWidth='sm'>
        {Array.from(tagMap.keys()).map(keyTag => (
          <Card >{keyTag}</Card>
        ))}
    </Box>
  )
}

export default ByTag
