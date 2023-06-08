// import React from "react";

// const MealsList = () => {

//     return (
//         <div>
//             <h2>Meals:</h2>
//             <ul>
//                 <li>
//                     <input 
//                         type="checkbox"
//                     />
//                     mealName
//                 </li>
//             </ul>
//         </div>
//     )
// }

// export default MealsList;

import React, { useContext } from 'react';
import { MealsContext } from './MealsProvider';

const MealsList = () => {
  const { meals, tickMeal } = useContext(MealsContext);

  const handleCheckboxChange = (id) => {
    tickMeal(id);
  };

  return (
    <div>
      <h2>Meals:</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <input
              type="checkbox"
              checked={meal.ticked}
              onChange={() => handleCheckboxChange(meal.id)}
            />
            {meal.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealsList;
