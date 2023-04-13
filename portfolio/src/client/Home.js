import React from "react";
import {
    IconButton,
    Typography
} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from "@mui/material/Grid";

export default function Home() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Grid container xs={12} paddingLeft={10} paddingRight={10} paddingTop={'120px'} height={'100vh'} width={'100%'}>

            <Grid xs={12} direction={'column'} display="flex" justifyContent="center" alignItems="center">
                <Grid xs={12} display="flex" direction="column" justifyContent="center" alignItems="center">
                    <Typography variant={'h1'}>Hello!</Typography>
                    <Typography variant={'h4'} paddingBottom={2}>My name is Claire McGonigle.</Typography>
                    <Typography variant={'h5'} alignItems={'center'}>I made this website for fun, to share my Fulbright side project, some
                        pictures </Typography>
                    <Typography variant={'h5'}> from my year, and some information from my time in Spain.</Typography>
                </Grid>

                {/*<Grid xs={12} display="flex" justifyContent="center" alignItems="center" paddingTop={5}>*/}
                {/*    <IconButton*/}
                {/*        // size="large"*/}
                {/*        aria-label="account of current user"*/}
                {/*        aria-controls="menu-appbar"*/}
                {/*        aria-haspopup="true"*/}
                {/*        onClick={() => openInNewTab('https://www.linkedin.com/in/claire-m-mcgonigle/')}*/}
                {/*    >*/}
                {/*        /!*sx={{ fontSize: "180px" }}*!/*/}
                {/*        <LinkedInIcon/>*/}
                {/*    </IconButton>*/}
                {/*</Grid>*/}
                {/*</Grid>*/}
            </Grid>

        </Grid>
    );

}

// export default Home;