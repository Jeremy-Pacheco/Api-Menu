// import NavBar from "../components/NavBar";

// function Pork() {
//     return(
//         <>
//         <NavBar/>
//         <h1>Carnivoros</h1>
//         </>
//     )
// }

// export default Pork;

import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";

function Pork() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=pork')
      .then((response) => {
        if (!response.ok) throw new Error('Error en la respuesta');
        return response.json();
      })
      .then((data) => {
        setRecipes(data.meals);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <NavBar />
      <h1>Carnívoros</h1>
      {loading && <p>Cargando recetas...</p>}
      {error && <p>Error: {error}</p>}
      {(!loading && !error && recipes) && (
        <ul style={{ padding: 0 }}>
          {recipes.map((receta) => (
            <li key={receta.idMeal} style={{ marginBottom: '1em', listStyle: 'none' }}>
              <img 
                src={receta.strMealThumb}
                alt={receta.strMeal}
                style={{ width: '160px', height: 'auto', borderRadius: '8px', marginRight: '1em' }}
              />
              <span>{receta.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Pork;

