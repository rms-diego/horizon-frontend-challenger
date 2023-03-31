import styles from "./styles.module.scss";

import { FaHome, FaSearch, FaBook, FaSpotify } from "react-icons/fa";

const categories = [
  "Funk",
  "Rock",
  "Indie",
  "Jazz",
  "Bossa Nova",
  "Pop",
  "R&B",
  "Reggae",
  "Electronic",
];

export function Sidebar() {
  return (
    <aside className={styles.asideContainer}>
      <FaSpotify size={35} className={styles.spotifyLogo} />
      <div className={styles.asideNavigation}>
        <p className={styles.notAllowed}>
          <FaHome />
          Home
        </p>

        <p className={styles.selected}>
          <FaSearch />
          Search
        </p>

        <p className={styles.notAllowed}>
          <FaBook /> Library
        </p>

        <hr />
      </div>

      <div className={styles.categoriesList}>
        {categories.map((category) => (
          <p key={category} className={styles.notAllowed}>
            {category}
          </p>
        ))}
      </div>
    </aside>
  );
}
