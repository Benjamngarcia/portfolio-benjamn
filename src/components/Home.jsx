import { Nav } from './Nav'
import { Main } from './Main'
import { Skills } from './Skills'
import Box from '@mui/material/Box';
import { Footer } from './Footer';
import {Fragment} from 'react'

export const Home = () => {
    return (
        <Fragment>
            <Nav />
            <Box
                component="main"
                xs={4}
            >
                {/* <Toolbar /> */}
                <Main />
                <Skills />
                <Footer />
            </Box>
        </Fragment>
    )
}