import React from "react";
import {Button, Divider, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Map from "./components/map";

export default function Fulbright() {

    const placesList = [{
        name: "Alcalá de Henares",
        photoName: "AlcaladeHenares",
        date: "September 5th - September 9th",
        description: "hello"
    }, {
        name: "Madrid",
        photoName: "Madrid",
        date: "September 9th",
        description: "hello"
    }, {
        name: "La Gomera",
        photoName: "LaGomera",
        date: "October 6th - October 9th",
        description: "hello"
    }, {
        name: "Sevilla",
        photoName: "Sevilla",
        date: "January 26th - January 29th",
        description: "hello"
    }, {
        name: "Pamplona",
        photoName: "Pamplona",
        date: "February 8th - February 12th",
        description: "hello"
    }, {
        name: "Santiago de Compostela",
        photoName: "SantiagodeCompostela",
        date: "February 8th - February 12th",
        description: "hello"
    }, {
        name: "Valencia",
        photoName: "Valencia",
        date: "March 16th - March 19th",
        description: "hello"
    }, {
        name: "Gran Canaria",
        photoName: "GranCanaria",
        date: "March 31st - April 4th",
        description: "hello"
    },
    ];

    return (
        <Grid container paddingLeft={10} paddingRight={10} paddingTop={'120px'} height={'100vh'} width={'100%'}>

            <Grid item={true} xs={12} justifyContent="center" alignItems="center" display={"flex"}>
                <Grid item={true} xs={6} display="flex">
                    <Grid item={true} xs={12} direction={'column'} display="flex">
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

            <Grid item={true} xs={12} paddingTop={20} paddingBottom={15} justifyContent="center" alignItems="center"
                  display={"flex"}>
                <Grid item={true} xs={6} display="flex">
                    <Grid item={true} xs={12} direction={'column'} display="flex">
                        <Typography variant={'h2'}>Where I've Been This Year</Typography>
                        <Typography variant={'h4'}>On this map, you can see everywhere that I've gotten to travel within
                            Spain
                            this year. I have gotten to see so many different cities and regions of Spain, which are all
                            so
                            unique. So far, I've visited 3 of the 7 islands in Canarias, and 8 of the 17 regions of
                            Spain.
                            Islas Canarias, Islas Baleares, Galicia, Navarra, Catalonia, Madrid, Andalusia, and
                            Valencia.
                            Keep scrolling to read a bit about my experience in each place!
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item={true} xs={1}/>

                <Grid item={true} xs={5} display="flex">
                    <Map/>
                </Grid>
            </Grid>

            {placesList.map(place =>
                <Grid xs={12} direction={"column"} paddingBottom={3} display="flex">
                    <Grid item={true} xs={12} paddingBottom={3} display="flex">
                        <Grid item={true} xs={2} display="flex"/>
                        <Grid item={true} xs={8} direction={"column"} display="flex">
                            <Typography variant={'h3'}>{place.name}</Typography>
                            <Typography paddingTop={1} variant={'h5'}>
                                {place.date}
                            </Typography>
                            <Divider/>
                            <Typography paddingTop={1} variant={'h5'}>
                                {place.description}
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={2} display="flex"/>
                    </Grid>

                    <Grid item={true} display="flex" paddingBottom={10} xs={12}>
                        <Grid item={true} xs={3}>
                            <img
                                src={`https://claireportfolio2022.s3.amazonaws.com/${place.photoName}1.jpg`}
                                alt={'beachView'}
                                style={{
                                    objectFit: "cover",
                                    width: '98%',
                                    height: '98%',
                                }}/>
                        </Grid>
                        <Grid item={true} xs={3}>
                            <img
                                src={`https://claireportfolio2022.s3.amazonaws.com/${place.photoName}2.jpg`}
                                alt={'beachView'}
                                style={{
                                    objectFit: "cover",
                                    width: '98%',
                                    height: '98%',
                                }}/>
                        </Grid>
                        <Grid item={true} xs={3}>
                            <img
                                src={`https://claireportfolio2022.s3.amazonaws.com/${place.photoName}3.jpg`}
                                alt={'beachView'}
                                style={{
                                    objectFit: "cover",
                                    width: '98%',
                                    height: '98%',
                                }}/>
                        </Grid>
                        <Grid item={true} xs={3}>
                            <img
                                src={`https://claireportfolio2022.s3.amazonaws.com/${place.photoName}4.jpg`}
                                alt={'beachView'}
                                style={{
                                    objectFit: "cover",
                                    width: '98%',
                                    height: '98%',
                                }}/>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
}