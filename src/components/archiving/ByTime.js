import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import Box from "@mui/material/Box"
import { navigate } from "gatsby"
function ByTime() {
  const articleTimeArray = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              date
            }
          }
        }
      }
    }
  `)
  let articleTimeMap = new Map()
  try {
    const timeArray = articleTimeArray.allMdx.edges.map(
      temp => temp.node.frontmatter.date
    )
    timeArray.forEach(element => {
      const yearMonth = element.slice(0, 7)
      if (articleTimeMap.has(yearMonth)) {
        articleTimeMap.get(yearMonth).add(element)
      } else {
        let dateSet = new Set()
        dateSet.add(element)
        articleTimeMap.set(yearMonth, dateSet)
      }
    })
  } catch (error) {
    console.log("get date error:", error)
  }
  return (
    <Box>
      <Timeline>
        {Array.from(articleTimeMap.keys()).map(yearMonth => (
          <TimelineItem key={yearMonth}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              onClick={() =>
                navigate("/archiving/time", {state: {times: articleTimeMap.get(yearMonth)}})
              }
            >
              {yearMonth}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  )
}

export default ByTime
