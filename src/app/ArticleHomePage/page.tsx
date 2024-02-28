"use client"

import React from 'react'
import ImageSlider from '../components/ImageSlider'
import CardData from '../components/card'
import { Box, Button, Typography } from '@mui/material'
import Topic from '../components/Topic'
import FilterBar from '../components/FilterBar'

const ArticlePage = () => {
    return (
        <div>
            <Box>
                <Box>
                    <ImageSlider />
                </Box>
                <Box>
                    <FilterBar />
                </Box>
                <Box>
                    <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", ml: 25, textDecoration: 'underline' }}>
                            Featured
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
                        <CardData />
                        <CardData />
                        <CardData />
                        <Topic />
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", ml: 25, textDecoration: 'underline' }}>
                            Popular
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
                        <CardData />
                        <CardData />
                        <CardData />
                        <Topic />
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", ml: 25, textDecoration: 'underline' }}>
                            Rescent
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
                        <CardData />
                        <CardData />
                        <CardData />
                        <Topic />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button variant="outlined" sx={{ border: "1px solid black", color: "white", backgroundColor: "#81311A", p: 1, mb: 2, borderRadius: 3, width: "100px" }}><b>Load More</b></Button>
                </Box>
            </Box>
        </div>
    )
}

export default ArticlePage
