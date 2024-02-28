"use client"
import React, { useState } from 'react';
import { TextField, Container, Grid, Typography, InputAdornment, Box, IconButton, Button, useMediaQuery } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Card, CardContent, CardMedia } from '@mui/material';

import ShareIcon from '@mui/icons-material/Share';
import CardSlider from '../components/CardSlider';
import SubscribeModelBox from '../components/SubscribeModelBox';

function ArticlesPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Define the booklets data
    const booklets = [
        { name: 'Booklet 1', image: '/krishna.jpg', information: 'Some information about Booklet 1' },
        { name: 'Booklet 2', image: '/krishna.jpg', information: 'Some information about Booklet 2' },
        { name: 'Booklet 3', image: '/krishna.jpg', information: 'Some information about Booklet 3' },
        { name: 'Booklet 4', image: '/krishna.jpg', information: 'Some information about Booklet 4' },
        { name: 'Booklet 5', image: '/krishna.jpg', information: 'Some information about Booklet 5' },
        { name: 'Booklet 6', image: '/krishna.jpg', information: 'Some information about Booklet 6' },
    ];

    const matches = useMediaQuery("(min-width:600px)");

    return (

        <Container sx={{ backgroundColor: '#FEFCEA', minHeight: '100vh' }}>
            <Grid container justifyContent="flex-end" alignItems="center" spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                    <TextField
                        placeholder="Search"
                        variant="outlined"
                        value={searchQuery}
                        sx={{ borderRadius: '20px' }}
                        onChange={handleSearchChange}
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton>
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ backgroundColor: '#F5F5F5', p: 2, textAlign: 'center', paddingX: '50px' }}>
                        <Typography variant="h4">RadhaKrishna are two bodies and<br /> One Soul!</Typography>
                        <img src="/radha krishna.jpg" alt="RadhaKrishna" style={{ width: '100%', marginTop: '20px', height: '300px', borderRadius: '10px' }} />
                        <Box sx={{ paddingLeft: '5%', paddingRight: '5%' }}>
                            <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                1. nyonyacittavidusau nu parasparatmanityasthiteriti <br />
                                nrsu prathitau yadavam <br />
                                taccaupacarikamaho dvitayatvam eva <br />
                                naikasya sambhavati karhicidatmano nau
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                Sri Radhika says to sakhi: “Common people say, ‘Radha and Krsna are eternally present in each others’ hearts, and that is why They know each others’ minds.’ Factually, the real truth is this: We are one soul. It is not possible for one soul to become two.
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                2. ekatmaniha rasapurnatame ’tyagadheekasusangrathitam eva tanudvayam nau<br />
                                kasyimscidekasarasiva cakasadekanalo tthamabjayugalamkhalu nilapitam<br />
                                taccaupacarikamaho dvitayatvam eva <br />
                                naikasya sambhavati karhicidatmano nau
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                “In a lake, two lotuses – one blue and one yellow – may bloom from a single stem. In the same way, Our two bodies, one blue and one yellow, are connected as one life. They are one supremely profound soul composed of topmost rasa. As bodies We are separate, but by nature We are one. Krsna is by nature blissful (ananda) and I by nature am joyful (hladini). Just as fire and its burning potency are one, there is no difference between the potency (sakti) and the possessor of the potency (saktiman). We cannot be distinguished from each other when seen as a person and the person’s potency, but for the sake of rasa, We manifest in separate forms as Radha and Krsna. Without pastimes,We cannot relish each other; and without form, We cannot perform pastimes
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                3. yat snehapurabhrta bhajanarajitaikavarttyagr avarttyamaladipayugamcakasti<br />taccetaretaratamo ’panudat paroksamananday edakhilaparsvagatahsadalih
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                4. ekatmaniha rasapurnatame ’tyagadheekasusangrathitam eva tanudvayam nau<br />
                                kasyimscidekasarasiva cakasadekanalotth amabjayugalamkhalu nilapitam<br />
                                taccaupacarikamaho dvitayatvam eva <br />
                                naikasya sambhavati karhicidatmano nau
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'start' }}>
                                “In a lake, two lotuses – one blue and one yellow – may bloom from a single stem. In the same way, Our two bodies, one blue and one yellow, are connected as one life. They are one supremely profound soul composed of topmost rasa. As bodies We are separate, but by nature We are one. Krsna is by nature blissful (ananda) and I by nature am joyful (hladini). Just as fire and its burning potency are one, there is no difference between the potency (sakti) and the possessor of the potency (saktiman). We cannot be distinguished from each other when seen as a person and the person’s potency, but for the sake of rasa, We manifest in separate forms as Radha and Krsna. Without pastimes,We cannot relish each other; and without form, We cannot perform pastimes
                            </Typography>
                        </Box>
                        <SubscribeModelBox />
                    </Box>
                    <CardSlider/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ArticlesPage;
