import * as React from "react"
import * as styles from "./home.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Info = () => (
  <div>
    <StaticImage
      src="../../images/avatar.jpg" // 图片路径
      alt="Avatar"
      placeholder="blurred" // 加载时的占位效果
    />
  </div>
)

export default Info
