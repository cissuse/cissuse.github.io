import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <Link to="/">首页</Link>
    <Link to="/test">测试页</Link>
  </header>
)

export default Header
