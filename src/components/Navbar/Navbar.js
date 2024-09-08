import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, TextField, Button } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Navbar = ({ setFilters, handleSearch }) => {
  const [category, setCategory] = useState('business');
  const [country, setCountry] = useState('us');
  const [searchTerm, setSearchTerm] = useState('');

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
    <AppBar position="static" sx={{ backgroundColor: '#007BFF', padding: 2 }}>
      {/* Title */}
      <Toolbar sx={{ justifyContent: 'center', flexDirection: 'column' }}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          Eunnylans News
        </Typography>
        
        {/* Filter Bar and Search */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 2, 
            marginTop: 2 
          }}
        >
          {/* Filters */}
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={handleCategoryChange} label="Category">
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="technology">Technology</MenuItem>
              <MenuItem value="sports">Sports</MenuItem>
              <MenuItem value="health">Health</MenuItem>
              <MenuItem value="entertainment">Entertainment</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel>Country</InputLabel>
            <Select value={country} onChange={handleCountryChange} label="Country">
              <MenuItem value="us">US</MenuItem>
              <MenuItem value="gb">UK</MenuItem>
              <MenuItem value="ca">Canada</MenuItem>
            </Select>
          </FormControl>

          <Button 
            variant="contained" 
            color="primary" 
            onClick={applyFilters} 
            sx={{ height: '56px' }}
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
              sx={{ minWidth: 250 }}
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="secondary" 
              sx={{ height: '56px', marginLeft: '10px' }}
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
