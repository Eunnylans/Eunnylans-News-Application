import {
    AppBar,
    Box,
    Button,
    FormControl,
    IconButton,
    InputLabel,
    Menu,
    MenuItem,
    Select,
    TextField,
    Toolbar,
    Typography,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import React, { useState } from "react";
  
  const Navbar = ({ setFilters, handleSearch }) => {
    const [category, setCategory] = useState("business");
    const [country, setCountry] = useState("us");
    const [searchTerm, setSearchTerm] = useState("");
    const [anchorEl, setAnchorEl] = useState(null); // For controlling the menu
  
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleCountryChange = (e) => setCountry(e.target.value);
    const applyFilters = () => setFilters({ category, country });
    const onSearch = (e) => {
      e.preventDefault();
      handleSearch(searchTerm);
    };
  
    const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
  
    return (
      <AppBar position="static" sx={{ backgroundColor: "#007BFF", padding: 1 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4" component="div" sx={{ color: "white" }}>
            Eunnylans News
          </Typography>
  
          {/* Hamburger Menu for small screens */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem>
                <FormControl variant="outlined" sx={{ minWidth: 100 }}>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={category}
                    onChange={handleCategoryChange}
                    label="Category"
                  >
                    <MenuItem value="business">Business</MenuItem>
                    <MenuItem value="technology">Technology</MenuItem>
                    <MenuItem value="sports">Sports</MenuItem>
                    <MenuItem value="health">Health</MenuItem>
                    <MenuItem value="entertainment">Entertainment</MenuItem>
                  </Select>
                </FormControl>
              </MenuItem>
              <MenuItem>
                <FormControl variant="outlined" sx={{ minWidth: 100 }}>
                  <InputLabel>Country</InputLabel>
                  <Select
                    value={country}
                    onChange={handleCountryChange}
                    label="Country"
                  >
                    <MenuItem value="us">US</MenuItem>
                    <MenuItem value="gb">UK</MenuItem>
                    <MenuItem value="ca">Canada</MenuItem>
                  </Select>
                </FormControl>
              </MenuItem>
              <MenuItem>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={applyFilters}
                  sx={{ color: "white", backgroundColor: "#007BFF" }}
                >
                  Apply Filters
                </Button>
              </MenuItem>
              <MenuItem>
                <form onSubmit={onSearch}>
                  <TextField
                    label="Search"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                      "& .MuiInputLabel-root": { color: "black" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "black" },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{
                      marginLeft: "10px",
                      color: "white",
                      backgroundColor: "#007BFF",
                    }}
                  >
                    Search
                  </Button>
                </form>
              </MenuItem>
            </Menu>
          </Box>
  
          {/* Full screen view */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <FormControl variant="outlined" sx={{ minWidth: 100 }}>
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
  
            <FormControl variant="outlined" sx={{ minWidth: 100 }}>
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
  
            <form onSubmit={onSearch}>
              <TextField
                label="Search"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
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
  