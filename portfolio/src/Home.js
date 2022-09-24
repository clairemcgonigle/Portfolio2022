import React, {Component} from "react";
import {
    Backdrop,
    Button,
    Container,
    Paper, Popover,
    Rating, TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material";

import Grid from "@mui/material/Grid";

export default function Home() {

    return (
        <Grid container xs={12} paddingLeft={10} paddingRight={10} paddingTop={'120px'} height={'100vh'} width={'100%'}>

            <Grid xs={12} direction={'column'} display="flex" justifyContent="center" alignItems="center">
            <Grid xs={12} display="flex" justifyContent="flex-end" alignItems="flex-end">
                <Typography variant={'h1'}>Hello</Typography>
            </Grid>

            <Grid xs={12} display="flex" justifyContent="flex-start" alignItems="flex-start">
                <Typography variant={'h5'}>My name is Claire McGonigle.</Typography>
            </Grid>
            </Grid>

        </Grid>
    );

}

// export default Home;