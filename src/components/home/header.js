import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./home.module.css"
const Header = () => (
  <header className={styles.headerInfo}>
    <Link className={styles.myLink} to="/">首页</Link>
    <Link className={styles.myLink} to="/test">归档</Link>
  </header>
)

export default Header
