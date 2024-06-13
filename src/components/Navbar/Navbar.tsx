import SearchInput from "../SearchInput/SearchInput";
import styles from "./navbar.module.css";

const Navbar = ({
  handleInputChange,
  handleSearch,
}: {
  handleInputChange: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}) => {
  return (
    <nav className={styles.mainNavDiv}>
      <div>
        <SearchInput
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
      </div>
    </nav>
  );
};

export default Navbar;
