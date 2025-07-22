import styles from './styles/mdx.module.css'
import NavigationBar from '../home-page/NavigationBar';
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className={styles.mdxContainer}>
      <div className={styles.navBar}><NavigationBar/></div>
      <div className={styles.articleInfo}>articleInfo</div>
      <div className={styles.article}>{children}</div>
    </div>
  );
}
