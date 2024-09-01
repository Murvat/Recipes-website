import { getAllCategories } from "../api";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Preloader from '../components/Preloader';
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([])

    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );

        navigate({
            pathname,
            search: `?search=${str}`,
        });
    };
    ///
    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((item) =>
                        item.strCategory
                            .toLowerCase()
                            .includes(new URLSearchParams(search).get('search').toLowerCase())
                    )
                    : data.categories
            );
        });
    }, [search]);
    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? <Preloader /> : (
                <CategoryList catalog={filteredCatalog} />
            )}</>
    )
};
export default Home;