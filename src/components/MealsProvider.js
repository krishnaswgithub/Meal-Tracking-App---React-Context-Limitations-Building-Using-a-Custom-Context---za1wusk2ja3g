// import React, { useState } from "react";

// const todaysMeals = [
//     { id: 1, name: 'Baked Beans' },
//     { id: 2, name: 'Baked Sweet Potatoes' },
//     { id: 3, name: 'Baked Potatoes' },
// ]

// const MealsProvider = () => {
//     const [meals, setMeals] = useState(todaysMeals);

//     const tickMeal = () => {

//     }

//     return (
//         <div>
            
//         </div>
//     )
// };

// export default MealsProvider;


import React, { useState } from 'react';

export const MealsContext = React.createContext();

const todaysMeals = [
  { id: 1, name: 'Baked Beans', ticked: false },
  { id: 2, name: 'Baked Sweet Potatoes', ticked: false },
  { id: 3, name: 'Baked Potatoes', ticked: false },
];

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);

  const tickMeal = (id) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.id === id ? { ...meal, ticked: !meal.ticked } : meal
      )
    );
  };

  return (
    <MealsContext.Provider value={{ meals, tickMeal }}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;

