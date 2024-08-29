import CategoryItem from "./CategoryItem.jsx";
const CategoryList = ({ catalog = [] }) => {
    return (
        <div className="list">
            {catalog.map(el => (
                <CategoryItem key={el.idCategory} {...el} />))}

        </div>
    )


}
export default CategoryList;