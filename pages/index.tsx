import React from 'react';
import Layout from '../components/Layout';
import CardGrid from "../components/CardGrid";
import {TEMPLATES} from "../constants/templates";

const HomePage: React.FC = () => {

    return (
        <Layout title="">
        <h1 className="mt-10 mb-4 ml-10 text-4xl font-bold">
            Welcome to <span className="text-blue-600">Quirky.ai</span> 🧞‍♂️
        </h1>

        <h2 className="mt-4 mb-4 ml-10 text-2xl font-light">
            Your personalized <strong className="text-blue-600">AI wonderland of endless possibilities </strong> ✨
        </h2>

        <h3 className="mt-4 mb-4 ml-10 text-xl">
        🎩💡💬
        </h3>

        <h4 className="mt-4 mb-4 ml-10 text-lg">
            
        </h4>
        <CardGrid cards={TEMPLATES}/>
    </Layout>
);
};

export default HomePage;
