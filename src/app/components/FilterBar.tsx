"use client"
import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Typography, Box } from '@mui/material';




const FilterBar = () => {
    const [searchText, setSearchText] = useState('');
    const [sortBy, setSortBy] = useState('');


    const handleChange = (setState) => (e) => {
        setState(e.target.value);
    };



    return (
        <div >
       

        </div>
    );
};

export default FilterBar;
