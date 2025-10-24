import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MealDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg flex flex-col md:flex-row gap-8">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full md:w-1/2 h-auto rounded-lg shadow-md object-cover"
      />
      <div className="flex-1 flex flex-col">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {meal.strMeal}
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          <span className="font-semibold">Category:</span> {meal.strCategory}
        </p>
        <p className="text-sm text-gray-500 mb-3">
          <span className="font-semibold">Area:</span> {meal.strArea}
        </p>
        <p className="text-base text-gray-700 whitespace-pre-line">
          {meal.strInstructions}
        </p>
        <button
          className="mt-3.5 w-max px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-900 transition-colors duration-200 shadow"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default MealDetail;
