import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function BookletCard() {
  return (
    <Box sx={{ width: "250px" }}>
    {/* <Card sx={{ maxWidth: 250, height: 285, borderRadius: 2, border: "1px solid" }}> */}
    <Card sx={{ maxWidth: '250px', mb: 2, backgroundColor: '#FCDFA0', alignItems: 'center', borderRadius: '15px', border: "1px solid" }}>
        <CardActionArea>
            <Box sx={{ display: "flex", justifyContent: "center", backgroundColor:"white"}}>
                <CardMedia
                    component="img"
                    image="/book2.jpg"
                    sx={{ backgroundColor: "white", height: "200px", width: "80%" }}
                    alt="Shrimad Bhaghwatgita"
                // sx={{borderRadius:'15px'}}
                />
            </Box>
            <CardContent>
                <Box sx={{ backgroundColor: "#FCDFA0", padding: "1PX" }}>
                    <Typography variant="h4" sx={{ fontSize: "large", fontWeight: "bold" }}>
                        Bhagvad Gita-As it is
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: "10px", color: "gray" }}>
                        By Srila Prabhupad
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="h6" sx={{ fontSize: "8px", color: "gray" }}>
                            12 Jan 2024
                        </Typography>
                        <Box>
                            <Button variant="outlined" sx={{ border: "1px solid black", color: "white", fontSize: "10px", backgroundColor: "#81311A", borderRadius: 2, height: "20px", padding: 1, width: "10px" }}>Buy</Button>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </CardActionArea>
    </Card>
</Box>
  )
};

export default BookletCard;