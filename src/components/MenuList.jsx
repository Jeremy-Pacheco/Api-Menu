import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { Link, useParams } from "react-router-dom";
import { Atom } from "react-loading-indicators";

function MenuList({ category = "Seafood" }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const { category: dynamicCat } = useParams();
  const currentCategory = dynamicCat || category;

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${currentCategory}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Error loading data");
        return res.json();
      })
      .then((data) => {
        const mealsWithPrice = data.meals.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          thumb: meal.strMealThumb,
          category: currentCategory,
          price: (Math.random() * 20 + 5).toFixed(2),
        }));
        setItems(mealsWithPrice);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [currentCategory]);

  const filteredAndSortedItems = items
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // para toda la pantalla
        }}
      >
        <Atom color="#32cd32" size="medium" text="loading..." textColor="" />
      </div>
    );

  if (error) return <p>{error}</p>;

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search dish..."
          className="border p-2 rounded shadow w-full sm:w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded shadow w-full sm:w-56"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Price: low to high</option>
          <option value="desc">Price: high to low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-fr">
        {filteredAndSortedItems.map((item) => (
          <Link key={item.id} to={`/meals/${item.id}`}>
            <MenuItem {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
