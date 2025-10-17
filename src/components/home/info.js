import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./home.module.css"
import { FaGithub } from "react-icons/fa"
import { SiGitee } from "react-icons/si"
import { TbBrandJuejin } from "react-icons/tb"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
const Info = () => (
  <div className={styles.infoContainer}>
    <Box className={styles.myInfo}>
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
      <Typography>去重山</Typography>
      <Typography>欢迎来到去重山的博客</Typography>
      <Box className={styles.iconContainer}>
        <FaGithub size={20} />
        <SiGitee size={20} />
        <TbBrandJuejin size={20} />
      </Box>
    </Box>
    <StaticImage
      src="../../images/hanlu.jpg" // 图片路径
      alt="Avatar"
      placeholder="blurred"
      width={150}
      height={330}
      imgStyle={{
        borderRadius: "20px",
        objectFit: "cover", // 确保图片填充圆形区域
      }}
    />
    <Typography variant="body2" component="footer">provide by cissuse</Typography>
  </div>
)

export default Info
