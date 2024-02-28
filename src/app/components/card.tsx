import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import ShareIcon from '@mui/icons-material/Share';

function CardData() {

    const booklets = [
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
    ];

    return (
        <Box >
            {[0, 1, 2].map((index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'center', gap: '16px', paddingTop: '20px' }}>
                    {booklets.slice(index * 3, (index + 1) * 3).map((booklet, i) => (
                        <Card key={i} sx={{ width: '300px', border: "1px solid", mb: 2, backgroundColor: '#FCDFA0' }}>
                            <CardMedia
                                component="img"
                                height="80"
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
        </Box>
    );
};

export default CardData;
