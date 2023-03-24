import React, {useEffect, useState} from "react";
import {Button, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";

export default function SideProject() {
    let navigate = useNavigate();

    const [recipes, setRecipes] = useState([{
        name: '',
        recipe: ''
    }])

    const [currentRecipe, setRecipe] = useState([{
        name: '',
        recipe: ''
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
                    <Typography variant={'h2'}>My Recipe Book</Typography>
                    <Typography variant={'h4'}>Welcome to my side project! While in Spain, I have been putting together
                        a collection of recipes. These are a mix of Canarian recipes shared with me by people I've
                        met here, and my own recipes from home that I have been sharing. Check out my collection
                        of recipes below:</Typography>
                </Grid>.
            </Grid>

            <Grid item={true} xs={1}/>

            <Grid item={true} xs={5} direction={'column'} display="flex">
            {/*    <Grid item={true} xs={12} display="flex">*/}
            {/*        <Grid item={true} xs={6} direction={'column'} display="flex">*/}
            {/*            <Typography variant={'h6'}>Spinach Artichoke Dip</Typography>*/}
            {/*        </Grid>*/}
            {/*        <Grid item={true} xs={6} direction={'column'} display="flex">*/}
            {/*            <Typography variant={'h6'}>Garbanzas</Typography>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*    <Grid item={true} xs={12} display="flex">*/}
            {/*        <Grid item={true} xs={6} direction={'column'} display="flex">*/}
            {/*            <Typography variant={'h6'}>Papas Arrugadas</Typography>*/}
            {/*        </Grid>*/}
            {/*        <Grid item={true} xs={6} direction={'column'} display="flex">*/}
            {/*            <Typography variant={'h6'}>Croquetas</Typography>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*    <Grid item={true} xs={12} display="flex">*/}
            {/*        <Grid item={true} xs={6} direction={'column'} display="flex">*/}
            {/*            <Typography variant={'h6'}>Thanksgiving Stuffing</Typography>*/}
            {/*        </Grid>*/}
            {/*        <Grid item={true} xs={6} direction={'column'} display="flex">*/}
            {/*            <Typography variant={'h6'}>Tortilla</Typography>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*    <Grid item={true} xs={12} display="flex">*/}
            {/*        <Grid item={true} xs={6} direction={'column'} display="flex">*/}
            {/*            <Typography variant={'h6'}>Banana Bread</Typography>*/}
            {/*        </Grid>*/}
            {/*        <Grid item={true} xs={6} direction={'column'} display="flex">*/}
            {/*            <Typography variant={'h6'}>Garlic Soup</Typography>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}

                <Grid item={true} xs={12} direction={'column'} display="flex">
                    {recipes.map(recipe =>
                        <Button variant='button1' disableRipple
                                onClick={() => navigate(`/recipe_book/${recipe}`)}
                            // style={{fontWeight: window.location.href.includes('aboutMe') ? "bold" : "regular"}}
                        > {recipe.name}
                        </Button>
                    //<Typography variant={'h6'} padding={2}>{recipe.name}</Typography>
                    // <Typography variant={'h6'}>{recipe.recipe}</Typography>
                        )}
                </Grid>
            </Grid>
        </Grid>
)
    ;
}