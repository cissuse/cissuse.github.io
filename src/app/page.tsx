import styles from "./page.module.css";
import MyInfo from "@/components/home-page/MyInfo";
import NavigationBar from "@/components/home-page/NavigationBar";
import ArticleList from "@/components/home-page/ArticleList";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.navigationBar}>
        <NavigationBar />
      </div>
      <div className={styles.myInfo}>
        <MyInfo />
      </div>
      <div className={styles.articleList}>
        <ArticleList />
      </div>
    </div>
  );
}
