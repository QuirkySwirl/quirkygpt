import React, {Fragment, useState} from "react";
import Card, {CardProps} from "./Card";
import CategoriesList from "./CategoryList";

interface Props {
    cards: CardProps[];
}

const CardGrid: React.FC<Props> = ({cards}) => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <Fragment>
            <div className="p-6 ">
                <CategoriesList onSelectedCategory={handleSelectCategory}/>
                <div
                    className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center place-items-center">
                    {cards.filter((card) => selectedCategory === "all" || card?.categories?.includes(selectedCategory)).map((card, index) => (
                        <Card {...card} key={index}/>
                    ))}
                    <div style={{"minHeight": "300px", background: '#6366F1'}} className="relative h-full p-6 bg-white shadow-sm rounded-2xl">
                        <div
                            className="flex items-center justify-center w-16 h-16 mb-4 text-3xl text-indigo-500 bg-white rounded-full">
                            <i className="fas fa-robot"></i>
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-white">Want to integrate AI into your business?</h3>
                        <a href="https://twitter.com/QuirkySwirl" target="_blank"
                           rel="noopener noreferrer"
                           className="inline-block px-6 py-2 mt-5 text-sm font-medium text-indigo-500 bg-white rounded-full shadow-md hover:bg-opacity-90">Talk
                            to me
                        </a>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default CardGrid;
