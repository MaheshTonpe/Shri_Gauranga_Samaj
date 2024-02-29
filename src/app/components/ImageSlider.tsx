"use client"

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: '',
        imgPath:
            '/krishna.jpg',
    },
    {
        label: '',
        imgPath:
            '/radha krishna.jpg',
    },
    {
        label: '',
        imgPath:
            '/shree radha logo.jpg',
    },
    {
        label: '',
        imgPath:
            '/radha krishna.jpg',
    },
];

function ImageSlider() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ backgroundColor: "#FEFCEA" }}>
            <Box sx={{ justifyContent: "center", width: '70%', marginLeft: "14%" }}>
                <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 100,
                            pl: 2,
                            bgcolor: '#FEFCEA',
                        }}
                    >
                        <Typography>{images[activeStep].label}</Typography>
                    </Paper>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 355,    //255
                                            display: 'block',
                                            maxWidth: '100%',
                                            overflow: 'hidden',
                                            width: '100%',
                                            borderRadius: 5,
                                        }}
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        sx={{display:"flex", justifyContent:"center", backgroundColor:"#FEFCEA"}}
                    />
                </Box>
            </Box>
        </Box>

    );
}

export default ImageSlider;
