import {
  AppBar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = ({ setFilters, handleSearch }) => {
  const [category, setCategory] = useState("business");
  const [country, setCountry] = useState("us");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);

  const applyFilters = () => {
    setFilters({ category, country });
  };

  const onSearch = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#007BFF", padding: 1 }}>
      <Toolbar sx={{ justifyContent: "center", flexDirection: "column" }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, color: "white" }}
        >
          Eunnylans News
        </Typography>

        {/* Filter Bar and Search */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Responsive layout
            justifyContent: "flexEnd",
            alignItems: "flexEnd",
            gap: 2,
            marginTop: 2,
          }}
        >
          {/* Filters */}
          <FormControl
            variant="outlined"
            sx={{ minWidth: 50, mb: { xs: 2, sm: 0 } }}
          >
            <InputLabel sx={{ color: "white" }}>Category</InputLabel>
            <Select
              value={category}
              onChange={handleCategoryChange}
              label="Category"
              sx={{
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
              }}
            >
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="technology">Technology</MenuItem>
              <MenuItem value="sports">Sports</MenuItem>
              <MenuItem value="health">Health</MenuItem>
              <MenuItem value="entertainment">Entertainment</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            variant="outlined"
            sx={{ minWidth: 50, mb: { xs: 2, sm: 0 } }}
          >
            <InputLabel sx={{ color: "white" }}>Country</InputLabel>
            <Select
              value={country}
              onChange={handleCountryChange}
              label="Country"
              sx={{
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
              }}
            >
              <MenuItem value="us">US</MenuItem>
              <MenuItem value="gb">UK</MenuItem>
              <MenuItem value="ca">Canada</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="secondary"
            onClick={applyFilters}
            sx={{ height: "56px", color: "white", backgroundColor: "#007BFF" }}
          >
            Apply Filters
          </Button>

          {/* Search Bar */}
          <form onSubmit={onSearch}>
            <TextField
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                minWidth: 50,
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": { borderColor: "white" },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                height: "56px",
                marginLeft: "10px",
                color: "white",
                backgroundColor: "#007BFF",
              }}
            >
              Search
            </Button>
          </form>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
