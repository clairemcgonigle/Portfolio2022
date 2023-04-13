import React from "react";
import {Button, Divider, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Map from "./components/map";

export default function Fulbright() {

    const placesList = [{
        name: "Alcalá de Henares",
        photoName: "AlcaladeHenares",
        date: "September 5th - September 9th",
        description: "Fulbright orientation was in Alcalá de Henares, a smaller city outside of Madrid. Most of our " +
            "time here was spent in the University of Alcalá for our orientation sessions, but we had lots of lunches " +
            "and dinner times free to walk around the city. It's a cute area with some pretty architecture, and it was " +
            "so fun to get to spend time with all of the other Fulbrighters for a few days before we all go off to our " +
            "placements throughout Spain."
    }, {
        name: "Madrid",
        photoName: "Madrid",
        date: "September 9th",
        description: "Madrid! This was my first time in Madrid, and I really liked it. Highlights included Parque de " +
            "el Retiro (picture #1), Palacio Real de Madrid (picture #2 and picture #3), the Prado museum, and a great " +
            "food market. I only spent one day here, but I got to see some of the highlights and hope that I can come back!"
    }, {
        name: "La Gomera",
        photoName: "LaGomera",
        date: "October 6th - October 9th",
        description: "After setting into Tenerife for about 3 weeks, the first trip I took was to the neighboring " +
            "island of La Gomera with a few other Fulbrighters. It's only 58 miles from Tenerife, and the ferry ride " +
            "is less than an hour. The population of La Gomera is only 22,000 people, so it's a small but very pretty " +
            "island. Some of the highlights of the trip included going to a restaurant where the waiters performed " +
            "Silbo Gomero (a whisteling language that they used to communicate across the island), hiking in the big " +
            "park (picture #4), and lots of really beautiful lookouts, beaches, and drives. Honorable mention goes to " +
            "our airbnb that was literally covered in little black worms. Like completely covered in them."
    }, {
        name: "Sevilla",
        photoName: "Sevilla",
        date: "January 26th - January 29th",
        description: "Andalusia was at the top of my list of places in Spain that I wanted to visit this year, so I " +
            "decided to sign up for a half marathon there to make sure I would go! It's also the flattest half marathon " +
            "course in all of Europe so that was amazing. Sevilla was a really cool city and I loved it. Some " +
            "highlights were the Real Alcazar, Plaza de España (picture #1 and picture #4), renting a little rowboat " +
            "in the moat around Plaza de España, the Cathedral (picture #3), the orange trees everywhereeee, the " +
            "brunch restaurant we went to with eggs benedict, the bar we went to with a flamenco performance, the " +
            "flamenco performance in Plaza de España, and of course, the half marathon. I really want to come back " +
            "to Andalusia in the next few months, and would definitely recommend visiting Sevilla."
    }, {
        name: "Pamplona",
        photoName: "Pamplona",
        date: "February 8th - February 12th",
        description: "Fulbright mid-year conference! Most of our time on the 8th - 10th was spent in the University of " +
            "Navarra's lecture halls (picture #1), so I was glad to stay an extra day on the 11th and get to explore " +
            "the city of Pamplona. I saw some Carnaval celebrations in the street which was very cool (picture #2), " +
            "and got to walk around the city and try lots of pintxos (small finger foods that are popular in Basque " +
            "Country and Navarra). Pintxos are cool and a little different from tapas because they're really like a " +
            "mini dish, so rather than sharing a plate with the table, you can try a few mini options. Pamplona was a " +
            "pretty city, and I'm glad that I got to visit Navarra and see all of the other Fulbrighters for a few days!"
    }, {
        name: "Santiago de Compostela",
        photoName: "SantiagodeCompostela",
        date: "February 8th - February 12th",
        description: "Galicia was one of the places in Spain that I really wanted to visit, and me and one of my " +
            "roommates took a trip to Santiago de Compostela. We didn't have great luck with the weather and it rained " +
            "100% of the time we were there (and was super windy, picture #3), but we had a great time. A few " +
            "highlights were the cathedral (picture #1), which is beautifullll on the inside as well, and a modern " +
            "food hall (picture #2) with lots of traditional Galician options like Caldo Gallego (picture #4). Santiago " +
            "is a pretty city, and the landscape and architecture almost reminded me of England or Germany in a way."
    }, {
        name: "Valencia",
        photoName: "Valencia",
        date: "March 16th - March 19th",
        description: "I visited Valencia for one of the main weekends of Las Fallas, a celebration with tradition, fire," +
            " and art. There are so many traditions / festivals in Spain, and this was one of the coolest ones I've " +
            "gotten to see this year. There are a few main elements to Las Fallas that I got to see: La mascleta is a " +
            "pirotecnic display put on every day in the center of the city, and is a ton of explosions that fill the " +
            "square with smoke. Las fallas are the huge statues (there are hundreds throughout the city) made by " +
            "different groups out of wood, paper mache, and other flammable materials (one example in picture #1). " +
            "Some of these statues are like 50 feet tall, and the groups spend the entire year working on them." +
            "La Ofrenda de Flores (picture #2) is a huge wooden statue of la Virgen, and over the course of 2 days the " +
            "different comisiones falleras process through the streets carrying flowers to build her dress out of " +
            "flowers. The comisiones fallers are the groups of people who construct the Fallas, and they process " +
            "through the streets in traditional outfits (picture #4). At the end of Las Fallas, all of the fallas are " +
            "set on fire. I didn't get to see this because it happens on Sunday night, but all of the fallas are " +
            "completely burned on the last night to end the celebration. Valencia was a really cool city, and Las Fallas" +
            " will definitely be one of my favorite things that I've gotten to attend all year while in Spain."
    }, {
        name: "Gran Canaria",
        photoName: "GranCanaria",
        date: "March 31st - April 4th",
        description: "For the first few days of Semana Santa, I took a trip with one of my roommates to Gran Canaria. " +
            "It's the island to the east of Tenerife, only about 70 miles away. Some highlights of the trip were the " +
            "Maspalomas sand dunes (picture #2), Barranco de Guayadeque (picture #4), and the natural pools / beaches. " +
            "This is island 3/7 that I have visited, and it was a great way to start our week off!"
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