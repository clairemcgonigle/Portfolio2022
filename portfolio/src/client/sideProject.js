import React, {useEffect, useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";

export default function SideProject() {
    let navigate = useNavigate();

    const [recipes, setRecipes] = useState([{
        name: '',
        recipe: '',
        recipeSpanish: '',
    }])

    const [currentRecipe, setRecipe] = useState([{
        name: '',
        recipe: '',
        recipeSpanish: '',
        ingredients: '',
        ingredientsSpanish: '',
        recipeInfo: '',
    }])

    useEffect(() => {
        fetch("/recipe_book").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setRecipes(jsonRes));
    })

    return (
        <Grid container paddingLeft={10} paddingRight={10} paddingTop={'120px'} height={'100vh'} width={'100%'}>
            <Grid item={true} xs={6} direction={'column'} display="flex">
                <Grid item={true} xs={12} direction={'column'} display="flex">
                    <Typography paddingBottom={2} variant={'h2'}>My Recipe Book</Typography>
                    <Typography variant={'h4'}>Welcome to my Fulbright side project! While in Spain, I have been putting
                        together a collection of recipes. These are a mix of Spanish recipes (many of them Canarian,
                        more specifically) shared with me by people I've met here, and my own recipes from home that I
                        have been sharing. Check out my collection of recipes to the right, and scroll to view all:</Typography>
                </Grid>.
            </Grid>

            <Grid item={true} xs={1}/>

            <Grid item={true} xs={5} direction={'column'} display="flex">
                <Box style={{maxHeight: '75vh', overflow: 'auto'}}>
                    <Grid item={true} xs={12} direction={'column'} display="flex">
                        {recipes.map(recipe =>
                            <Button sx={{mb: 2, pb: 2}} variant='button1' disableRipple
                                    onClick={() => {
                                        setRecipe(recipe)
                                        navigate(`/recipe_book/${recipe.name}`)
                                    }}
                            > {recipe.name}
                            </Button>
                        )}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
        ;
}