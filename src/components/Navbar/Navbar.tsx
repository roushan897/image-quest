import SearchInput from "../SearchInput/SearchInput";
import styles from "./navbar.module.css";

const Navbar = ({
  handleInputChange,
  handleSearch,
  value,
}: {
  handleInputChange: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  value: string;
}) => {
  return (
    <nav className={styles.mainNavDiv}>
      <div>
        <SearchInput
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          value={value}
        />
      </div>
    </nav>
  );
};

export default Navbar;
