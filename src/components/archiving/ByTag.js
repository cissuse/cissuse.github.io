import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import { navigate } from "gatsby"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
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
    <Box>
      {Array.from(tagMap.keys()).map(tag => (
        <Card onClick={() => navigate('/archiving/tag', {state: {tags: tagMap.get(tag)}})}>{tag}</Card>
      ))}
    </Box>
  )
}

export default ByTag
