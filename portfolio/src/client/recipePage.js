import React, {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";

export default function RecipePage() {
    const [recipe, setRecipe] = useState({
        name: '',
        recipe: ''
    })
    // useEffect(() => {
    //     fetch("/recipe_book/:name").then(res => {
    //         if (res.ok) {
    //             return res.json()
    //         }
    //     }).then(jsonRes => setRecipe(jsonRes));
    // })

    return (
        <Grid container paddingLeft={10} paddingRight={10} paddingTop={'120px'} height={'100vh'} width={'100%'}>
            <Grid item={true} xs={6} direction={'column'} display="flex">
                <Grid item={true} xs={12} direction={'column'} display="flex">
                    <Typography variant={'h2'}>Recipe Title</Typography>
                    <Typography variant={'h4'}>Welcome to my side project! While in Spain, I have been putting together
                        a collection of recipes. These are a mix of Canarian recipes shared with me by people I've
                        met here, and my own recipes from home that I have been sharing. Check out my collection
                        of recipes below:</Typography>
                </Grid>.
            </Grid>

            <Grid item={true} xs={1}/>

            <Grid item={true} xs={5} direction={'column'} display="flex">

                {/*<Grid item={true} xs={12} direction={'column'} display="flex">*/}
                {/*    {recipe.map(recipe =>*/}
                {/*            <Typography variant={'h6'} padding={2}>{recipe.name}</Typography>*/}
                {/*        // <Typography variant={'h6'}>{recipe.recipe}</Typography>*/}
                {/*    )}*/}
                {/*</Grid>*/}
            </Grid>
        </Grid>
    )
        ;
}