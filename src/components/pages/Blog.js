import { Box, Typography } from '@mui/material'
import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Blog = () => {
    return (
        <>
            <Navbar />
            <Box className='blot-container'
                sx={{
                    width: '100%',
                    // backgroundColor: 'primary.main',
                    backgroundColor: 'primary.dark',
                    padding: '20px'
                }}>
                <Box className='blog'
                    sx={{
                        backgroundColor: 'primary.main',
                        borderRadius: '20px',
                        // padding:'20px'
                        p: '20px',
                        display: 'flex',
                        '&:hover': {
                            backgroundColor: 'primary.light'
                        }
                    }}>
                    <Box className='blog-content'
                        sx={{
                            width: '80%',
                            paddingRight: '20px'
                        }}
                    >
                        <Box className='blog-title'>
                            <Typography variant='h4'
                                sx={{
                                    textDecoration: 'underline',
                                    color: 'gray',
                                    '&:hover': {
                                        color: 'white',
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                Title
                            </Typography>
                        </Box>
                        <Box className='blog-text'
                            sx={{
                                textAlign: 'justify',
                                letterSpacing: '20px',
                                lineHeight: '25px'
                            }}
                        >
                            text here
                        </Box>
                    </Box>
                    <Box className='blog-author'
                        sx={{
                            borderLeft: 'solid',
                            pl: '20px',
                            textAlign: 'center',
                            width: '20%'
                        }}
                    >
                        <Box className='blogger-image mx-auto'
                            sx={{
                                width: '90%',
                                height: '150px',
                                margin: 'auto',
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                overflow: 'hidden'
                            }}>
                            <img src={'./mobile_img/image1.jpg'}
                                sx={{
                                    width: '100%',
                                    height: '100%'
                                }} />
                        </Box>
                        <Box className='blogger-name'
                            sx={{
                                textAlign: 'right',
                                fontWeight: 'bold'
                            }}>
                            Mr. Blogger
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Blog