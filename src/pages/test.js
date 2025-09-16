import * as React from "react"
import Layout from "../components/layout"

function Archiving() {
  return (
    <Layout>
      <div
        className="container"
        style={{
          backgroundColor: "rgb(0, 23, 58)",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          className="card"
          style={{
            height: "250px",
            width: "180px",
            borderColor: "blue",
            borderStyle: "solid",
            background: "linearGradient(45deg, blue, red);",
          }}
        ></div>
      </div>
    </Layout>
  )
}

export default Archiving
