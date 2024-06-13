import { Search } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

const SearchInput = () => {
  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <OutlinedInput
        type="search"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              //   onClick={handleClickShowPassword}
              //   onMouseDown={handleMouseDownPassword}
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
