import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const Topic = () => {
    return (
        <div>
            <Grid item xs={12} md={4}>
                <Stack direction="column" spacing={-1} >
                    <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>
                        Topic
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                        o Book Topic 1
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                        o Book Topic 1
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                        o Book Topic 1
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                        o Book Topic 1
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                        o Book Topic 1
                    </Typography>
                    <Box>
                        <Typography>
                            See More...
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
        </div>
    )
}

export default Topic
