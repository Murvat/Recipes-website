import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

const Category = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name)
            .then(data => {
                setMeals(data.meals)
            })
    }, []);

    return (
        <>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    )

};

export default Category;