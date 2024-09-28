import React, { useState } from "react";
import { Box, Typography, Link, Card, CardMedia, CardContent, Button } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import img1 from "../images/watch/img1.png";
import img2 from "../images/watch/img2.png";
import Layout from "../component/Layout/Layout";
import star from "../images/watch/star.png"; // Importing the star image

const images = [
    { src: img1, title: "Story Of Miraj" },
    { src: img1, title: "Jungle Adventure" },
    { src: img1, title: "Bugs Adventure" },
    { src: img1, title: "Amazing Journey" },
    { src: img1, title: "Fun Time" },
];

const Watch = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 3; // Number of cards to show at a time

    // Function to go to the next set of cards
    const nextImage = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex >= images.length - cardsToShow) {
                return 0; // If at the last index, go to the first index
            }
            return prevIndex + 1;
        });
    };

    // Function to go to the previous set of cards
    const prevImage = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return images.length - cardsToShow; // If at the first index, go to the last index
            }
            return prevIndex - 1;
        });
    };

    return (
        <Layout>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    backgroundColor: 'rgb(171, 202, 255)',
                    color: 'white',
                    padding: 2,
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: '2rem', md: '4rem' },
                        mt: { xs: 5, md: 10 },
                        textAlign: 'center',
                    }}
                >
                    Watch Islamic Halal Cartoon{" "}
                    <span style={{ color: 'rgb(106, 57, 162)' }}>Shine And Tara</span>
                </Typography>

                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '3rem' },
                        mt: 2,
                        textAlign: 'center',
                    }}
                >
                    With One Click
                </Typography>

                <Link
                    href="https://www.youtube.com/channel/UCDPkatnNvtWdiITSvzneBEw"
                    target="_blank"
                    underline="none"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'black',
                        mt: 2,
                    }}
                >
                    <YouTubeIcon sx={{ fontSize: 50, mr: 1, color: 'red' }} />
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black' }}>
                        YouTube
                    </Typography>
                </Link>

                <Box sx={{ width: '100%', borderTop: '2px solid white', mt: 8 }} />

                {/* Carousel Section */}
                <Box sx={{ position: 'relative', width: '100%', maxWidth: 1200, mt: 8, mb: 8 }}>
                    {/* Previous Button */}
                    <Button
                        onClick={prevImage}
                        sx={{
                            position: 'absolute',
                            left: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 1,
                            color: 'white',
                            backgroundColor: 'orange',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            '&:hover': { backgroundColor: '#ff8c00' }
                        }}
                    >
                        <ArrowBackIcon />
                    </Button>

                    {/* Display the images in a responsive manner */}
                    <Box sx={{ display: 'flex', overflow: 'hidden', padding: '0 5px' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
                                transition: 'transform 0.5s ease-in-out',
                            }}
                        >
                            {images.map((image, index) => (
                                <Card
                                    key={index}
                                    sx={{
                                        minWidth: { xs: 150, sm: 200, md: 250 },
                                        margin: '0 10px',
                                        backgroundColor: 'orange',
                                        borderRadius: 2,
                                        flex: '0 0 auto',
                                        boxShadow: 3,
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={image.src}
                                        alt={image.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" align="center">
                                            {image.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Box>

                    {/* Next Button */}
                    <Button
                        onClick={nextImage}
                        sx={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 1,
                            color: 'white',
                            backgroundColor: 'orange',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            '&:hover': { backgroundColor: '#ff8c00' }
                        }}
                    >
                        <ArrowForwardIcon />
                    </Button>
                </Box>

                {/* Horizontal Line below the carousel */}
                <Box sx={{ width: '100%', borderTop: '2px solid white', mt: 2 }} />

                {/* Collaborating with section */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 8 }}>
                    <img src={star} alt="Star" style={{ width: '60px', marginRight: '8px' }} />
                    <Typography variant="h4" sx={{ display: 'inline-block' }}>
                        Collaborating With <span style={{ color: 'rgb(106, 57, 162)' }}>Islamic Relief Canada</span>
                    </Typography>
                    <img src={star} alt="Star" style={{ width: '60px', marginLeft: '8px' }} />
                </Box>
                
                <Box
                    component="img"
                    src={img2}
                    alt="Islamic Relief"
                    sx={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%",
                        mt: 8,
                        mb: 8,
                    }}
                />

                {/* See More Button */}
                <Button
                    onClick={() => window.open("https://www.youtube.com/channel/UCDPkatnNvtWdiITSvzneBEw", "_blank")}
                    sx={{
                        mt: 4,
                        mb: 4,
                        width: "40%",
                        backgroundColor: 'rgb(143, 82, 161)',
                        color: 'white',
                        textAlign: 'center',
                        paddingY: 2, // Add padding for top and bottom
                        '&:hover': {
                            backgroundColor: 'rgb(123, 72, 141)', // Darker shade for hover effect
                        },
                    }}
                >
                    See More
                </Button>
            </Box>
        </Layout>
    );
};

export default Watch;
