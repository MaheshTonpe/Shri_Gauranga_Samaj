import { Grid, Box, Typography, IconButton, Card, CardMedia, CardContent } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel';
import ShareIcon from '@mui/icons-material/Share';

const CardSlider = () => {

    const booklets = [
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
    ];

    return (
        <div>
            <Grid item xs={12} sx={{padding:2}}>
                <Box sx={{ height:400, Width: '100%', backgroundColor: '#FFF0F0' }}>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Typography variant="h6" sx={{ color: 'black', paddingTop: '50px',fontWeight:"bold" }}>You  may also like</Typography>
                    </Box>
                    <Carousel
                        autoPlay={false}
                        indicators={false}
                        animation="slide"
                        navButtonsAlwaysVisible={true}
                        swipe
                        swipeable
                    >
                        {[0, 1, 2].map((index) => (
                            <Box key={index} sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px',gap:5,mb:5 }}>
                                {booklets.slice(index * 3, (index + 1) * 3).map((booklet, i) => (
                                    <Card key={i} sx={{ width: '250px', mb: 2, backgroundColor: '#FCDFA0', borderRadius: 3, height:260}}>
                                        <CardMedia
                                            component="img"
                                            height={100}
                                            sx={{ borderRadius: 3 }}
                                            image={booklet.image}
                                            alt={booklet.name}
                                        />
                                        <CardContent >
                                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>{booklet.name}</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {booklet.information}
                                            </Typography>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                                <Typography variant="h6" sx={{ fontSize: "9px", color: "gray" }}>
                                                    1 Jan 2023
                                                </Typography>
                                                <Box sx={{ color: "#81311A" }}>
                                                    <ShareIcon />
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Grid>
        </div>
    )
}

export default CardSlider
