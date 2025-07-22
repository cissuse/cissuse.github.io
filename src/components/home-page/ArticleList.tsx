"use client";

import { useRouter } from "next/navigation";
import styles from "./homePage.module.css";
import articleListData from "../../../mdx_files.json";

export default function ArticleList() {
  const router = useRouter();
  const handleItemClick = (articleRouter: string) => {
    router.push(articleRouter);
  };
  return (
    <div className={styles.articleListContainer}>
      {articleListData.map((item) => (
        <div
          className={styles.articleIntro}
          key={item.route}
          onClick={() => {
            handleItemClick(item.route);
          }}
        >
          <div>{item.data.title}</div>
          <div>{item.data.slug}</div>
        </div>
      ))}
    </div>
  );
}
