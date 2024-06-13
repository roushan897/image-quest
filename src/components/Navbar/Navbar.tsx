import SearchInput from "../SearchInput/SearchInput";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.mainNavDiv}>
      <div>
        <SearchInput />
      </div>
    </nav>
  );
};

export default Navbar;
