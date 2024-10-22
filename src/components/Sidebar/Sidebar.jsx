

const Sidebar = ({recipeQueue, handleRemove, prepareRecipe, calculateTimeAndCalries, totalTime, totalCalories}) => {
    return (
        <div className="md:w-1/3 mt-20 border-2 rounded-2xl text-gray-600 ml-3 p-2">
          {/* <h3 className="text-center text-2xl font-bold">Want To Cook : {recipeQueue.length}</h3>  */}
          {/* want to cook  */}
          <div className="overflow-x-auto border-b-2">
            <h2 className="border-b-2 mx-auto font-semibold text-gray-800 text-2xl text-center py-3">Want To Cook: {recipeQueue.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        recipeQueue.map((recipe, idx) => 
            <tr className="hover" key={idx}>
            <td>{idx + 1}</td>
            <td>{recipe.title}</td>
            <td>{recipe.time}</td>
            <td>{recipe.calories}</td>
           <td> <button className="bg-green-500 text-white  px-2 py-2 md:px-2 md:py-2 rounded-lg" onClick={()=> {
            handleRemove(recipe.id); calculateTimeAndCalries(recipe.time, recipe.calories);}}>Preparing</button></td>
          </tr>
        )
    }
    
    </tbody>
  </table>
</div>
          {/* currently cooking table  */}
          <div className="overflow-x-auto border-b-2">
            <h2 className="border-b-2 mx-auto font-semibold text-gray-800 text-2xl text-center py-3">Currently Cooking: {prepareRecipe.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
       
      </tr>
    </thead>
    <tbody>
    {
        prepareRecipe.map((recipe, idx) => 
            <tr className="hover" key={idx}>
            <td>{idx + 1}</td>
            <td>{recipe.title}</td>
            <td>{recipe.time}</td>
            <td>{recipe.calories}</td>
         
          </tr>
        )
    }
    <tr className="border-none">
        <th></th>
        <td></td>
        <td className="font-bold">Total Time = {totalTime}</td>
        <td className="font-bold">Total Calories = {totalCalories} </td>
    </tr>
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Sidebar;