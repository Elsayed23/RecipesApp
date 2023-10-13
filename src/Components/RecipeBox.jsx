import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import RecipeDetails from './RecipeDetails'

const Box = ({ strMealThumb, strMeal, strArea, strInstructions, strYoutube }) => {

    return (
        <Card>
            <CardHeader shadow={false} floated={false} className="h-96">
                <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="h-full w-full object-fill"
                />
            </CardHeader>
            <CardBody>
                <div className="mb-2 text-center">
                    <Typography color="blue-gray" className="font-semibold text-xl">
                        {strMeal} | ({strArea} Food)
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <RecipeDetails instructions={strInstructions} recipeName={strMeal} youtube={strYoutube} />
            </CardFooter>
        </Card>
    );
}

export default Box;