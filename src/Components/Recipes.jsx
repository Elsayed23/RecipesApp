import React from 'react';
import { Input } from '@material-tailwind/react';
import Result from './RecipesResult'


const Recipes = () => {

    const [search, setSearch] = React.useState('');


    return (
        <>
            <div className="flex flex-col items-center gap-14 mb-16">
                <h1 className='text-3xl md:text-5xl font-bold text-center capitalize'>search about your favourite meal</h1>
                <div className="flex w-80 flex-col gap-6">
                    <Input variant="static" color="white" onChange={(e) => setSearch(e.target.value)} value={search} label="Meal Name" />
                </div>
            </div>
            <Result search={search} />
        </>
    );
}

export default Recipes;