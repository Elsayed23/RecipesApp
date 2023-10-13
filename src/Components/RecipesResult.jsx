import React from 'react';
import axios from 'axios';
import RecipeBox from './RecipeBox';
import NotFoundMeals from './NotFoundMeals';
import Loading from './Loading'

const Result = ({ search }) => {

    const [recipes, setRecipes] = React.useState(null);

    async function getRecipeByName() {
        try {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const { meals } = data
            setRecipes(meals);
        } catch (error) {
            console.log(error);
        }
    }

    function handleEmptySTR() {
        return search && recipes === null ? <NotFoundMeals /> : <Loading />
    }
    const AllRecipes = recipes?.map((recipe, idx) => {
        return (
            <RecipeBox key={idx} {...recipe} />
        )
    })


    React.useEffect(() => {
        getRecipeByName()
    }, [search]);

    return (
        recipes
            ?
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 xl:grid-cols-3 md:gap-10 xl:gap-14">
                {AllRecipes}
            </div>
            :
            handleEmptySTR()
    );
}

export default Result;