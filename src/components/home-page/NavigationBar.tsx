import styles from "./homePage.module.css";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className={styles.navigationBarContainer}>
      <div style={{marginRight: '10px'}}>
        <Link href="/">首页</Link>
      </div>
      <div>
        <Link href="/archiving">归档</Link>
      </div>
    </div>
  );
}
