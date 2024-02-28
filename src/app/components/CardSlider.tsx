import { Grid, Box, Typography, IconButton, Card, CardMedia, CardContent } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CardSlider = () => {

    const booklets = [
        { name: 'Booklet 1', image: '/krishna.jpg', information: 'Some information about Booklet 1' },
        { name: 'Booklet 2', image: '/krishna.jpg', information: 'Some information about Booklet 2' },
        { name: 'Booklet 3', image: '/krishna.jpg', information: 'Some information about Booklet 3' },
        { name: 'Booklet 4', image: '/krishna.jpg', information: 'Some information about Booklet 4' },
        { name: 'Booklet 5', image: '/krishna.jpg', information: 'Some information about Booklet 5' },
        { name: 'Booklet 6', image: '/krishna.jpg', information: 'Some information about Booklet 6' },
        { name: 'Booklet 7', image: '/krishna.jpg', information: 'Some information about Booklet 4' },
        { name: 'Booklet 8', image: '/krishna.jpg', information: 'Some information about Booklet 5' },
        { name: 'Booklet 9', image: '/krishna.jpg', information: 'Some information about Booklet 6' },
    ];

    return (
        <div>
            <Grid item xs={12} >
                <Box sx={{ position: 'relative', overflow: 'hidden', marginX: 'auto', maxWidth: '100%', backgroundColor: '#FFF0F0', marginTop: '20px', borderRadius: '10px', textAlign: 'center', paddingX: '50px' }}>
                    <Typography variant="h6" sx={{ color: 'black', paddingTop: '50px' }}>You  may also like</Typography>
                    <Carousel
                        autoPlay={false}
                        indicators={false}
                        animation="slide"
                        navButtonsAlwaysVisible={true}
                        swipe
                        swipeable
                    >
                        {[0, 1, 2].map((index) => (
                            <Box key={index} sx={{ display: 'flex', justifyContent: 'center', gap: '16px', paddingTop: '20px' }}>
                                {booklets.slice(index * 3, (index + 1) * 3).map((booklet, i) => (
                                    <Card key={i} sx={{ width: '300px', mb: 2, backgroundColor: '#FCDFA0' }}>
                                        <CardMedia
                                            component="img"
                                            height="80"
                                            image={booklet.image}
                                            alt={booklet.name}
                                        />
                                        <CardContent>
                                            <Typography variant="h5">{booklet.name}</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {booklet.information}
                                            </Typography>
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
