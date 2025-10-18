import React from "react"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import { navigate } from "gatsby"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

function ArticleInfo({ tag, slug, title, date, excerpt }) {
  const tags = tag.split(",")
  return (
    <Card
      key={title + date}
      onClick={() => navigate(`/blog/${slug}`)}
      sx={{ backgroundColor: "transparent" }}
    >
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography variant="h4">{title}</Typography>
        <Box>
          {tags.map(tag => {
            return <Chip label={tag} sx={{ mr: 1 }} />
          })}
        </Box>
      </Stack>
      <Typography sx={{marginBottom: 1}}>{date}</Typography>
      <Divider />
      <Box maxHeight={80}>
        <Typography variant="subtitle1">{excerpt}</Typography>
      </Box>
    </Card>
  )
}

export default ArticleInfo
