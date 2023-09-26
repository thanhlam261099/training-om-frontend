import styles from "../styles/layout.module.css";

export default function Layout(props: any) {
  return <div className={styles.layout}>{props.children}</div>;
}
