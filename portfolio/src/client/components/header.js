import {
    AppBar,
    Button,
    Toolbar,
    Typography
} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";

const Header = () => {
    let navigate = useNavigate();

    return (
        <AppBar sx={{bgcolor: 'white'}}>
            <Toolbar disableGutters>
                <Grid container paddingLeft={10} paddingRight={10} paddingBottom={1} paddingTop={1}>

                    <Grid item={true} xs={6}>
                        {/*<IconButton*/}
                        {/*    onClick={() => navigate('/')}*/}
                        {/*>*/}
                        <Typography variant={'h3'} color={'black'}>
                            claire mcgonigle
                        </Typography>
                        {/*</IconButton>*/}
                    </Grid>

                    <Grid item={true} xs={6} display={'flex'} alignItems={'center'}>

                        <Grid item={true} xs={4} display="flex"
                              justifyContent="flex-end"
                              alignItems="flex-end">
                            <Button variant='button1' disableRipple
                                onClick={() => navigate('/')}
                            >

                                    home
                            </Button>
                        </Grid>

                        {/*<Grid item={true} xs={3} display="flex"*/}
                        {/*      justifyContent="flex-end"*/}
                        {/*      alignItems="flex-end">*/}
                        {/*    <Button variant='button1' disableRipple*/}
                        {/*        onClick={() => navigate('/aboutMe')}*/}
                        {/*            // style={{fontWeight: window.location.href.includes('aboutMe') ? "bold" : "regular"}}*/}
                        {/*    >*/}
                        {/*            about me*/}
                        {/*    </Button>*/}
                        {/*</Grid>*/}

                        <Grid item={true} xs={4} display="flex"
                              justifyContent="flex-end"
                              alignItems="flex-end">
                            <Button variant='button1' disableRipple
                                onClick={() => navigate('/fulbright')}
                            >
                                    fulbright
                            </Button>
                        </Grid>

                        <Grid item={true} xs={4} display="flex"
                              justifyContent="flex-end"
                              alignItems="flex-end">
                            <Button variant='button1' disableRipple
                                    onClick={() => navigate('/recipe_book')}
                            >
                                recipe book
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;