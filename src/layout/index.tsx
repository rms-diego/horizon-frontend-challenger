import { Sidebar } from "../components/Sidebar";
import styles from "./styles.module.scss";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <main className={styles.mainContainer}>
      <Sidebar />
      {children}
    </main>
  );
}
