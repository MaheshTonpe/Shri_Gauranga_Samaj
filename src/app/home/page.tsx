import React from 'react'
import ImageSlider from '../components/ImageSlider'
import MyProfile from '../MyProfile/page'
import { Box, Typography, useMediaQuery } from '@mui/material'
import Topic from '../components/Topic'
import BookCard from '../components/BookCard'
import BookletCard from '../components/BookletCard'

const HomePage = () => {

    // const matches = useMediaQuery("(min-width:600px)")

    return (
        <div>
            <Box sx={{ backgroundColor: "#FEFCEA" }}>
                <ImageSlider />
                <Box>
                    <Box sx={{ display: "flex", gap: 5,mt:2, justifyContent: "flex-start" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", ml: 25, textDecoration: 'underline' }}>
                            Article
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 5,mt:2, justifyContent: "center", flexWrap: "wrap" }}>
                        <MyProfile />
                        <MyProfile />
                        <MyProfile />
                        <Topic />
                    </Box>

                </Box>
                <Box>
                    <Box sx={{ display: "flex", gap: 5,mt:2, justifyContent: "flex-start" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", ml: 25, textDecoration: 'underline' }}>
                            Books
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 5,mt:2, justifyContent: "center", flexWrap: "wrap" }}>
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <Topic />
                    </Box>
                    {/* <Box sx={{display:"flex", justifyContent:""}}>
                    <Typography variant='h6' sx={{ fontWeight: "bold", fontSize:"small" }}>
                            See More
                        </Typography>
                    </Box> */}
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Box sx={{ display: "flex", gap: 5,mt:2, justifyContent: "flex-start" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", ml: 25, textDecoration: 'underline' }}>
                            Booklets
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 5,mt:2, justifyContent: "center", flexWrap: "wrap" }}>
                        <BookletCard />
                        <BookletCard />
                        <BookletCard />
                        <Topic />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default HomePage
