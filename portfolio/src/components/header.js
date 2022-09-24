import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Button,
    Container, Divider,
    IconButton, List, ListItem, ListItemIcon, ListItemText,
    Menu, MenuItem, Paper, Popover,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import {NavLink} from "react-router-dom";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";

const Header = () => {
    let navigate = useNavigate();

    return (
        <AppBar sx={{bgcolor: 'white'}}>
            <Toolbar disableGutters>
                <Grid container xs={12} paddingLeft={10} paddingRight={10} paddingBottom={1} paddingTop={1}>

                    <Grid xs={6}>
                        <IconButton
                            onClick={() => navigate('/')}
                        >
                            <Typography variant={'h4'} color={'black'}>
                                claire mcgonigle
                            </Typography>
                        </IconButton>
                    </Grid>

                    <Grid xs={6} display={'flex'} alignItems={'center'}>
                        <Grid xs={6} display="flex"
                              justifyContent="flex-end"
                              alignItems="flex-end">
                            <IconButton
                                onClick={() => navigate('/stuff')}
                            >
                                <Typography variant={'h6'} color={'black'}>
                                    about me
                                </Typography>
                            </IconButton>
                        </Grid>

                        <Grid xs={6} display="flex"
                              justifyContent="flex-end"
                              alignItems="flex-end">
                            <IconButton
                                onClick={() => navigate('/contact')}
                            >
                                <Typography variant={'h6'} color={'black'}>
                                    fulbright
                                </Typography>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;