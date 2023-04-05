import React, {useEffect, useState} from "react";
import {Divider, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";

export default function RecipePage() {
    var pathArray = window.location.pathname.split('/');
    var recipeName = pathArray[pathArray.length - 1].replaceAll("%20", " ");
    var recipeImage = pathArray[pathArray.length - 1].replaceAll("%20", "");

    const [currentRecipe, setRecipe] = useState([{
        name: '',
        recipe: '',
        recipeSpanish: '',
        ingredients: '',
        ingredientsSpanish: '',
        recipeInfo: '',
    }])

    useEffect(() => {
        fetch(`/recipe_book/${recipeName}`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setRecipe(jsonRes[0]));
    })

    return (
        <Grid container paddingLeft={10} paddingRight={10} paddingTop={'120px'} height={'100vh'} width={'100%'}>
            <Grid item={true} xs={12} paddingBottom={15} display="flex">
                <Grid item={true} xs={6} direction={'column'} display="flex">
                    <Grid item={true} xs={12} direction={'column'} display="flex">
                        <Typography variant={'h2'}>{currentRecipe.name}</Typography>
                        <Typography variant={'h4'}>{currentRecipe.recipeInfo}</Typography>
                        <Typography variant={'h4'}>Find both English and Spanish versions of the recipe below.</Typography>
                    </Grid>.
                </Grid>

                <Grid item={true} xs={1}/>

                <Grid item={true} xs={5} direction={'column'} display="flex">
                    <Grid item={true} xs={12} direction={'column'} display="flex">
                        <img
                            src={`/images/${recipeImage}Image1.jpg`}
                            alt={'Recipe Image #1'}
                            style={{
                                objectFit: "cover",
                            }}/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item={true} xs={12} direction={'column'} display="flex">
                <Typography paddingBottom={1} variant={'h3'}>English</Typography>
                <Divider/>
            </Grid>
            <Grid item={true} xs={5} direction={'column'} display="flex">
                <Typography variant={'h4'} paddingBottom={2}>Ingredients</Typography>
                <Typography variant={'h6'}>{currentRecipe.ingredients}</Typography>
            </Grid>
            <Grid item={true} xs={2} direction={'column'} display="flex"/>
            <Grid item={true} xs={5} direction={'column'} display="flex">
                <Typography variant={'h4'} paddingBottom={2}>Recipe</Typography>
                <Typography variant={'h6'}>{currentRecipe.recipe}</Typography>
            </Grid>

            <Grid item={true} xs={12} paddingTop={25} direction={'column'} display="flex">
                <Typography paddingBottom={1} variant={'h3'}>Español</Typography>
                <Divider/>
            </Grid>
            <Grid item={true} xs={5} direction={'column'} display="flex">
                <Typography variant={'h4'} paddingBottom={2}>Ingredientes</Typography>
                <Typography variant={'h6'}>{currentRecipe.ingredientsSpanish}</Typography>
            </Grid>
            <Grid item={true} xs={2} direction={'column'} display="flex"/>
            <Grid item={true} xs={5} direction={'column'} display="flex">
                <Typography variant={'h4'} paddingBottom={2}>Receta</Typography>
                <Typography variant={'h6'}>{currentRecipe.recipeSpanish}</Typography>
            </Grid>


            <Grid item={true} xs={12} paddingTop={15} paddingBottom={'150px'} direction={"column"} display="flex">
                <Grid item={true} paddingBottom={5} xs={12} direction={"column"} display="flex">
                    <Typography paddingBottom={1} variant={'h3'}>Images of the Recipe</Typography>
                    <Divider/>
                </Grid>
                <Grid item={true} xs={12} display="flex">
                    <Grid item={true} xs={4} display="flex">
                    <img
                        src={`/images/${recipeImage}Image2.jpg`}
                        alt={'Recipe Image #2'}
                        style={{
                            objectFit: "cover",
                            maxWidth: '400px',
                            maxHeight: '400px'
                        }}/>
                    </Grid>
                    <Grid item={true} xs={4} display="flex">
                    <img
                        src={`/images/${recipeImage}Image3.jpg`}
                        alt={'Recipe Image #3'}
                        style={{
                            objectFit: "cover",
                            maxWidth: '400px',
                            maxHeight: '400px'
                        }}/>
                    </Grid>
                    <Grid item={true} xs={4} display="flex">
                    <img
                        src={`/images/${recipeImage}Image1.jpg`}
                        alt={'Recipe Image #1'}
                        style={{
                            objectFit: "cover",
                            maxWidth: '400px',
                            maxHeight: '400px'
                        }}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
        ;
}