import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ImageSlider from '../components/ImageSlider'
import BookCard from '../components/BookCard'
import Topic from '../components/Topic'

const BookHomePage = () => {
    return (
        <div>
            <Box sx={{ backgroundColor: "#FEFCEA" }}>
                <Box>
                    <ImageSlider />
                    <Box>
                        <Box>
                            <p>hear is filter Section</p>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                            <Typography variant='h6' sx={{ fontWeight: "bold", ml: 30,mb:3,mt:3,  textDecoration: 'underline' }}>
                                Featured
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap"}}>
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <Topic />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                            <Typography variant='h6' sx={{ fontWeight: "bold", ml: 30,mb:3,mt:3,  textDecoration: 'underline' }}>
                                Popular
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <Topic />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", gap: 3, justifyContent: "flex-start" }}>
                            <Typography variant='h6' sx={{ fontWeight: "bold", ml: 30,mb:3,mt:3,  textDecoration: 'underline' }}>
                                Rescent
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <Topic />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button variant="outlined" sx={{ border: "1px solid black", color: "white", backgroundColor: "#81311A", p: 1, mb: 2, borderRadius: 3, width: "100px" }}><b>Load More</b></Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default BookHomePage
