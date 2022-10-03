import { Box, Typography } from '@mui/material'
import React from 'react'
import { CarouselTech } from './CarouselTech'
import { Text } from '../Props/Text'

export const Skills = () => {
    return (
        <Box sx={{ textAlign: 'center', padding: '3rem', marginTop: '1rem' }}>
            <Typography variant="h4" color="#576F72">
                {Text.skills.title}
            </Typography>
            <Typography variant="body1" sx={{ p: { xs: "0px 1rem", md: "0px 10rem", textAlign: 'justify' } }}>
                {Text.skills.paragraph[0]}
            </Typography>
            <Typography variant="body1" sx={{ p: { xs: "0px 1rem", md: "0px 10rem", textAlign: 'justify' } }}>
                {Text.skills.paragraph[1]}
            </Typography>
            <CarouselTech Text={Text}/>
        </Box>

    )
}