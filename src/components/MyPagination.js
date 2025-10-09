import * as React from "react"
import { Pagination } from "antd"
import { useStaticQuery, graphql } from "gatsby"

const MyPagination = () => {
  const articleNum = useStaticQuery(graphql`
    query {
      allMdx {
        totalCount
      }
    }
  `)
  
  return (
    <>
      <Pagination
        total={articleNum.allMdx.totalCount}
        pageSize={1}
        onChange={(e) => console.log(e)}
      />
    </>
  )
}

export default MyPagination
