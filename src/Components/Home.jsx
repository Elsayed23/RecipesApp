import React from 'react';
import Recipes from './Recipes'
import { Helmet } from 'react-helmet';
import Footer from './Footer';


const Home = () => {
    return (
        <>
            <Helmet title='Recipes' />
            <main className='py-24 px-4'>
                <Recipes />
            </main>
            <Footer />
        </>
    );
}

export default Home;