import { useEffect } from "react";
import { useState } from "react";


const Recipes = ({handleAddQueue}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('chef.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])
    return (
        <div className="w-2/3 mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {
            recipes.map(recipe => 
                <div key={recipe.id} className="card bg-base-100  shadow-xl">
  <figure className="px-4 pt-4">
    <img className="rounded-xl"
      src={recipe.img}
      alt="recipe img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl text-black font-bold">{recipe.title}</h2>
    <p className="text-gray-600 text-base">{recipe.description}</p>
    
    <h3 className="text-lg text-black font-medium">Ingredients : {recipe.ingredients.length}</h3>
    <ul className="ml-4">
        {
            recipe.ingredients.map((item, idx) => <li className="list-disc" key={idx}>{item}</li>)
        }
        <div className="flex gap-3 mt-3 text-center">
            <div className="flex items-center gap-1">
            <i className="fa-regular fa-clock ml-2"></i>
            <p>{recipe.time} minutes</p>
            
            </div>
            <div className="flex items-center gap-1">
            <i className="fa-solid fa-fire-flame-curved ml-2"></i>
            <p>{recipe.calories} minutes</p>
            
            </div>

        </div>
 
    </ul>
    <div className="card-actions">
      <button className="bg-green-500 text-white mt-3 px-5 py-3 rounded-xl" onClick={() => handleAddQueue(recipe)}>Want To Cook</button>
    </div>
  </div>
</div>
            )
         }

            </div>
        </div>
    );
};

export default Recipes;