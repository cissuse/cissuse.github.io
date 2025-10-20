import * as React from "react"
import Layout from "../../components/layout"
import ByTag from "../../components/archiving/ByTag"
import ByTime from "../../components/archiving/ByTime"
function Archiving() {
  return (
    <Layout>
      <ByTag />
      <ByTime />
    </Layout>
  )
}

export default Archiving
