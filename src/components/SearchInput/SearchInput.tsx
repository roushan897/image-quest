import { Search } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

const SearchInput = ({
  handleInputChange,
  handleSearch,
}: {
  handleInputChange: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}) => {
  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <OutlinedInput
        type="search"
        onChange={(e) => handleInputChange(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
                onClick={handleSearch}
              edge="end"
            >
              <Search />
            </IconButton>
          </InputAdornment>
        }
        placeholder="Search"
      />
    </FormControl>
  );
};

export default SearchInput;
