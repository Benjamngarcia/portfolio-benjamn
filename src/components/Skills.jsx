import { Box, Typography } from '@mui/material'
import React from 'react'
import { CarouselTech } from './CarouselTech'

export const Skills = () => {
    return (
        <Box sx={{ textAlign: 'center', padding: '3rem', marginTop: '1rem'}}>
            <Typography variant="h4" color="#576F72">
                Resumen
            </Typography>
            <Typography variant="body1" sx={{ p: { xs: "0px 1rem", md: "0px 10rem", textAlign: 'justify' } }}>
                Soy un desarrollador web de 19 años originario de México, programo desde el 2020 con tecnologías web.
                Actualmente me dedico a desarrollar proyectos con el stack MERN y a seguir descubriendo cosas nuevas.
            </Typography>
            <Typography variant="body1" sx={{ p: { xs: "0px 1rem", md: "0px 10rem", textAlign: 'justify' } }}>
                Me considero una persona con objetivos muy claros y muy persistente; una de las cosas que más me apasionan es aprender cosas nuevas tanto en el ámbito de la tecnología como fuera de él.
            </Typography>
            <CarouselTech/>
        </Box>

    )
}