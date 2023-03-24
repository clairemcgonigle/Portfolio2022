import React, {useRef} from "react";
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";

export default function AboutMe() {

    // const educationSection = useRef(null);
    const experienceSection = useRef(null);

    // const scrollDown = (ref) => {
    //     window.scrollTo({
    //         top: ref.current.offsetTop - 120,
    //         behavior: 'smooth',
    //     });
    // };

    return (
        <Grid container paddingLeft={15} paddingRight={15} paddingTop={'120px'} height={'100vh'} width={'100%'}>

            <Grid container height={'100vh'}>
                <Grid item={true} xs={6} justifyContent="center" alignItems="center">
                    <Grid item={true} xs={12} justifyContent="flex-end" alignItems="flex-end">
                        <Typography variant={'h2'}>About Me</Typography>
                        <img
                            src={'/images/McGonigle-Picture.jpg'}
                            alt={'sunset'}
                            style={{
                                objectFit: "cover",
                                borderRadius: '50%',
                                width: '98%',
                                height: '98%',
                                maxWidth: '400px',
                                maxHeight: '400px'
                            }}/>
                    </Grid>
                </Grid>

                <Grid item={true} xs={6}>
                    <Grid item={true} xs={12} justifyContent="flex-end" alignItems="flex-end">
                        <Grid item={true} xs={12} paddingBottom={'50px'}>
                            <Typography variant={'h3'} paddingBottom={'15px'}>Education</Typography>
                            <Typography variant={'h5'}>I am a recent graduate of Vanderbilt University, with
                                degrees in Computer Science and Spanish.</Typography>
                        </Grid>

                        <Grid item={true} xs={12}>
                            <Typography variant={'h3'} paddingBottom={'15px'}>Skills</Typography>
                            <Typography variant={'h5'} fontWeight={'bold'}>Coding Languages:</Typography>
                            <Typography variant={'h5'} paddingBottom={'15px'}>Java | Swift | JavaScript | C++ | Python | HTML &
                                CSS | MATLAB</Typography>
                            <Typography variant={'h5'} fontWeight={'bold'}>Frameworks and Technologies:</Typography>
                            <Typography variant={'h5'}>Git | React | AWS | Node | Flask | ExpressJS | Bootstrap</Typography>
                        </Grid>
                        {/*<Typography variant={'h2'}>About Me</Typography>*/}
                        {/*<Typography variant={'h4'} marginBottom={10} marginTop={10}>Hi! I'm Claire.</Typography>*/}
                        {/*<IconButton*/}
                        {/*    size="large"*/}
                        {/*    aria-label="account of current user"*/}
                        {/*    aria-controls="menu-appbar"*/}
                        {/*    aria-haspopup="true"*/}
                        {/*    onClick={() => scrollDown(educationSection)}*/}
                        {/*>*/}
                        {/*    <SchoolIcon/>*/}
                        {/*</IconButton>*/}
                        {/*<IconButton*/}
                        {/*    size="large"*/}
                        {/*    aria-label="account of current user"*/}
                        {/*    aria-controls="menu-appbar"*/}
                        {/*    aria-haspopup="true"*/}
                        {/*    onClick={() => scrollDown(experienceSection)}*/}
                        {/*>*/}
                        {/*    <ComputerIcon/>*/}
                        {/*</IconButton>*/}
                    </Grid>
                </Grid>
            </Grid>


            {/*<Grid container paddingBottom={'50px'}>*/}
            {/*    <Grid item={true} xs={5}>*/}
            {/*        <Typography variant={'h3'} paddingBottom={'15px'}>Education</Typography>*/}
            {/*        <Typography variant={'h5'}>I am a recent graduate of Vanderbilt University, with*/}
            {/*            degrees in Computer Science and Spanish.</Typography>*/}
            {/*    </Grid>*/}

            {/*    <Grid item={true} xs={1}/>*/}
            {/*    <Grid item={true} xs={6}>*/}
            {/*        <Typography variant={'h3'} paddingBottom={'15px'}>Skills</Typography>*/}
            {/*        <Typography variant={'h5'} fontWeight={'bold'}>Coding Languages:</Typography>*/}
            {/*        <Typography variant={'h5'} paddingBottom={'15px'}>Java | Swift | JavaScript | C++ | Python | HTML &*/}
            {/*            CSS | MATLAB</Typography>*/}
            {/*        <Typography variant={'h5'} fontWeight={'bold'}>Frameworks and Technologies:</Typography>*/}
            {/*        <Typography variant={'h5'}>Git | React | AWS | Node | Flask | ExpressJS | Bootstrap</Typography>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}

            <Grid container paddingBottom={'150px'} ref={experienceSection}>
                <Grid item={true} xs={6}>
                    <Typography variant={'h3'} paddingBottom={'15px'}>Experience</Typography>
                </Grid>
                <Grid item={true} xs={6}/>
                <Grid item={true} xs={4} paddingLeft={'15px'} paddingRight={'15px'}>
                    <Typography variant={'h4'} paddingBottom={'15px'}>Fulbright Spain</Typography>
                    <Typography variant={'h5'} paddingBottom={'10px'}>English Teaching Assistant Grantee</Typography>
                    <Typography variant={'h6'}>● Design and lead educational classroom activities in English language classes for students aged 3 to 12</Typography>
                    <Typography variant={'h6'}>● Build curriculum and collaborate with local organizations to provide supplemental Computer Science lessons to
                        students</Typography>
                </Grid>
                <Grid item={true} xs={4} paddingLeft={'15px'} paddingRight={'15px'}>
                    <Typography variant={'h4'} paddingBottom={'15px'}>Apple</Typography>
                    <Typography variant={'h5'} paddingBottom={'10px'}>Software Engineer Intern</Typography>
                    <Typography variant={'h6'}>● Developed internal tool in Swift for MacOS to be used in daily workflow by teams across the organization</Typography>
                    <Typography variant={'h6'}> ● Collaborated with business, UI and UX teams to develop tool concept and design mockups</Typography>
                    <Typography variant={'h6'}> ● Presented demo to business stakeholders and potential users of the feature across the organization</Typography>
                </Grid>
                <Grid item={true} xs={4} paddingLeft={'15px'} paddingRight={'15px'}>
                    <Typography variant={'h4'} paddingBottom={'15px'}>Institute for Software Integrated Systems</Typography>
                    <Typography variant={'h5'} paddingBottom={'10px'}>Research Assistant</Typography>
                    <Typography variant={'h6'}>● Implemented a new system for users to store projects and compile data within the Cyber-Physical Systems Virtual
                        Organization</Typography>
                    <Typography variant={'h6'}>● Collaborated with system administrators, researchers, and users to ideate, design, and implement new system</Typography>
                    <Typography variant={'h6'}>● Presented at the 2022 Cyber-Physical Systems IoT Conference</Typography>
                </Grid>
            </Grid>


        </Grid>
    );

}