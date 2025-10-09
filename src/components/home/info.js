import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./home.module.css"
import { GithubOutlined, HarmonyOSOutlined } from "@ant-design/icons"
const Info = () => (
  <div className={styles.infoContainer}>
    <div className={styles.myInfo}>
      <StaticImage
        src="../../images/avatar.jpg" // 图片路径
        alt="Avatar"
        placeholder="blurred"
        width={100}
        height={100}
        imgStyle={{
          borderRadius: "50px",
          objectFit: "cover", // 确保图片填充圆形区域
        }}
      />
      <div>cissuse's blog</div>
      <div>欢迎来到cissuse的博客</div>
      <div>
        <GithubOutlined />
        <HarmonyOSOutlined />
      </div>
    </div>
    <footer>provide by cissuse</footer>
  </div>
)

export default Info
