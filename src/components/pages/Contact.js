import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            <Container className='mx-auto m-5' sx={{
                boxShadow: "0 0 10px",
                // margin:'auto',
                padding: '25px',
                borderRadius: '10px'
            }}>
                <Box className='contact'
                    padding={3}
                    boxShadow={'0 0 10px'}
                    borderRadius={'10px'}
                    display={'flex'}
                    textAlign={'center'}
                >
                    <Box className='address' width={'50%'}>
                        <Typography variant='h4' className='text-decoration-underline'>
                            Address
                        </Typography>
                        <hr />
                        <Typography variant='h4'>Our Store</Typography>
                        <Typography variant='h6'>Kathmandu, Nepal</Typography>
                        <Typography variant='h6'>01-2345232, 033-234123</Typography>
                        <Typography variant='body1'>info@ourstore.com</Typography>
                    </Box>
                    <Box className='contact-form' width={'50%'}>
                        <Typography variant='h4' className='text-decoration-underline'>
                            Contact Form
                        </Typography>
                        <TextField
                            className='mb-2'
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            size='medium'
                            paddingBottom='210px'
                            fullWidth
                            multiline
                            marginBottom="5px"
                        />
                        <TextField
                            className='mb-2'
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            size='small'
                            paddingBottom='210px'
                            fullWidth
                            multiline
                            marginBottom="5px"

                        />
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            size='small'
                            paddingBottom='210px'
                            fullWidth
                            multiline
                            marginBottom="5px"
                        /><br />
                        <Button variant='contained' fullWidth>
                            Submit
                        </Button>
                    </Box>
                </Box>
                <hr />
                <Box className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2404031396472!2d85.3127180149163!3d27.709862782790925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1654165786816!5m2!1sen!2snp" width="100%" height="450"></iframe>

                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default Contact