"use client"
import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Typography, Box, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const FilterBar = () => {
    const [searchText, setSearchText] = useState('');
    const [sortBy, setSortBy] = useState('');


    const handleChange = (setter) => (event) => {
        setter(event.target.value);
    };

    return (
        <div >
            <Box sx={{ mt: 5, mb: 5, gap: 20 }}>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: "10PX" }}>
                    <Box sx={{mr:3}}>
                        <TextField
                        
                            label="Search"
                            value={searchText}
                            onChange={handleChange(setSearchText)}
                            style={{ marginBottom: '10px', border: '2px solid grey', borderRadius: "10px", width: 200, backgroundColor: 'white'}}
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>
                    <Typography >Sort By :</Typography>
                    <FormControl sx={{ width: 200, backgroundColor: 'white', borderRadius: '15px' }}>
                        <InputLabel id="sort-by" sx={{ transform: 'translateY(20%)', fontSize: '0.80rem', pl: 2 }}>Sort by</InputLabel>
                        <Select
                            labelId="sort-by"
                            id="sort-by"
                            label="Sort By"
                            onChange={handleChange}
                            sx={{ height: '28px', borderRadius: '10px', border: "1px solid" }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography >Filters:</Typography>
                    <FormControl sx={{ width: 200, backgroundColor: 'white', borderRadius: '15px' }}>
                        <InputLabel id="sort-by" sx={{ transform: 'translateY(20%)', fontSize: '0.80rem', pl: 2 }}>Departments</InputLabel>
                        <Select
                            labelId="sort-by"
                            id="sort-by"
                            label="Sort By"
                            onChange={handleChange}
                            sx={{ height: '28px', borderRadius: '10px', border: "1px solid" }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: 200, borderRadius: '15px', backgroundColor: 'white' }}>
                        <InputLabel id="sort-by" sx={{ transform: 'translateY(20%)', fontSize: '0.80rem', pl: 2 }}>Categories</InputLabel>
                        <Select
                            labelId="sort-by"
                            id="sort-by"
                            label="Sort By"
                            onChange={handleChange}
                            sx={{ height: '28px', borderRadius: '10px', border: "1px solid" }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: 200, borderRadius: '15px', backgroundColor: 'white' }}>
                        <InputLabel id="sort-by" sx={{ transform: 'translateY(20%)', fontSize: '0.80rem', pl: 2 }}>Scriptures</InputLabel>
                        <Select
                            labelId="sort-by"
                            id="sort-by"
                            label="Sort By"
                            onChange={handleChange}
                            sx={{ height: '28px', borderRadius: '10px', border: "1px solid" }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </div>
    );
};

export default FilterBar;
