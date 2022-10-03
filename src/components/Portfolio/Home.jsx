import { Nav } from '../General/Nav'
import { Main } from './Main'
import { Skills } from './Skills'
import Box from '@mui/material/Box';
import { Footer } from '../General/Footer';
import {Fragment} from 'react'

export const Home = () => {
    return (
        <Fragment>
            <Nav />
            <Box
                component="main"
                xs={4}
            >
                <Main />
                <Skills />
                <Footer />
            </Box>
        </Fragment>
    )
}