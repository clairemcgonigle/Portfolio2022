import React from "react";
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Fulbright() {
    return (
        <Grid container paddingLeft={10} paddingRight={10} paddingTop={'80px'} height={'100vh'} width={'100%'}>

            <Grid item={true} xs={12} justifyContent="center" alignItems="center" display={"flex"}>
                <Grid item={true} xs={6} display="flex">
                    <Grid item={true} xs={12} direction={'column'}  display="flex">
                        <Typography variant={'h2'}>My Time in Spain</Typography>
                        <Typography variant={'h4'}>A blog of my year in the Canary Islands, Spain, as a Fulbright
                            English Teaching Assistant.</Typography>
                    </Grid>.
                </Grid>

                <Grid container xs={3} direction={'column'} display="flex" justifyContent="flex-start"
                      alignItems="flex-end">
                    <Grid item={true} xs={6}>
                        <img
                            src={'https://claireportfolio2022.s3.us-east-1.amazonaws.com/sunset.JPG'}
                            alt={'sunset'}
                            style={{
                                objectFit: "cover",
                                width: '98%',
                                height: '98%',
                                maxWidth: '200px',
                                maxHeight: '200px'
                            }}/>
                    </Grid>

                    <Grid item={true} xs={6}>
                        <img
                            src={'https://claireportfolio2022.s3.us-east-1.amazonaws.com/building.png'}
                            alt={'building'}
                            style={{
                                objectFit: "cover",
                                width: '98%',
                                height: '98%',
                                maxWidth: '200px',
                                maxHeight: '200px'
                            }}/>
                    </Grid>

                    <Grid item={true} xs={6}>
                        <img
                            src={'https://claireportfolio2022.s3.us-east-1.amazonaws.com/concert.png'}
                            alt={'concert'}
                            style={{
                                objectFit: "cover",
                                width: '98%',
                                height: '98%',
                                maxWidth: '200px',
                                maxHeight: '200px'
                            }}/>
                    </Grid>
                </Grid>

                <Grid container xs={3} direction={'column'} display="flex" justifyContent="flex-start"
                      alignItems="flex-end">
                    <Grid item={true} xs={6}>
                        <img
                            src={'https://claireportfolio2022.s3.us-east-1.amazonaws.com/orientation.png'}
                            alt={'orientation'}
                            style={{
                                objectFit: "cover",
                                width: '98%',
                                height: '98%',
                                maxWidth: '200px',
                                maxHeight: '200px'
                            }}/>
                    </Grid>

                    <Grid item={true} xs={6}>
                        <img
                            src={'https://claireportfolio2022.s3.us-east-1.amazonaws.com/palace.png'}
                            alt={'palace'}
                            style={{
                                objectFit: "cover",
                                width: '98%',
                                height: '98%',
                                maxWidth: '200px',
                                maxHeight: '200px'
                            }}/>
                    </Grid>

                    <Grid item={true} xs={6}>
                        <img
                            src={'https://claireportfolio2022.s3.us-east-1.amazonaws.com/opera.png'}
                            alt={'opera'}
                            style={{
                                objectFit: "cover",
                                width: '98%',
                                height: '98%',
                                maxWidth: '200px',
                                maxHeight: '200px'
                            }}/>
                    </Grid>
                </Grid>

                <Grid container xs={3} direction={'column'} display="flex" justifyContent="flex-start"
                      alignItems="flex-end">
                    <Grid item={true} xs={6}>
                        <img
                            src={'https://claireportfolio2022.s3.us-east-1.amazonaws.com/beach.png'}
                            alt={'beach'}
                            style={{
                                objectFit: "cover",
                                width: '98%',
                                height: '98%',
                                maxWidth: '200px',
                                maxHeight: '200px'
                            }}/>
                    </Grid>

                    <Grid item={true} xs={6}>
                        <img
                            src={'https://claireportfolio2022.s3.us-east-1.amazonaws.com/beachView.png'}
                            alt={'beachView'}
                            style={{
                                objectFit: "cover",
                                width: '98%',
                                height: '98%',
                                maxWidth: '200px',
                                maxHeight: '200px'
                            }}/>
                    </Grid>

                    <Grid item={true} xs={6}>
                        <img
                            src={'https://claireportfolio2022.s3.us-east-1.amazonaws.com/plane.png'}
                            alt={'plane'}
                            style={{
                                objectFit: "cover",
                                width: '98%',
                                height: '98%',
                                maxWidth: '200px',
                                maxHeight: '200px'
                            }}/>
                    </Grid>
                </Grid>

                <Grid container xs={3} direction={'column'} display="flex" justifyContent="flex-start"
                      alignItems="flex-end">
                    <Grid item={true} xs={6}>
                        <img
                            src={'https://claireportfolio2022.s3.us-east-1.amazonaws.com/school.png'}
                            alt={'school'}
                            style={{
                                objectFit: "cover",
                                width: '98%',
                                height: '98%',
                                maxWidth: '200px',
                                maxHeight: '200px'
                            }}/>
                    </Grid>

                    <Grid item={true} xs={6}>
                        <img
                            src={'https://claireportfolio2022.s3.us-east-1.amazonaws.com/water.png'}
                            alt={'water'}
                            style={{
                                objectFit: "cover",
                                width: '98%',
                                height: '98%',
                                maxWidth: '200px',
                                maxHeight: '200px'
                            }}/>
                    </Grid>

                    <Grid item={true} xs={6}>
                        <img
                            src={'https://claireportfolio2022.s3.us-east-1.amazonaws.com/potatoes.png'}
                            alt={'potatoes'}
                            style={{
                                objectFit: "cover",
                                width: '98%',
                                height: '98%',
                                maxWidth: '200px',
                                maxHeight: '200px'
                            }}/>
                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    );
}