import data from '../data.json';
import { useParams } from 'react-router-dom';
function RecipeDetail() {
  const {id} = useParams();
  const recipe = data.find(r=>String(r.id)=== String(id))
  return (
    <div className="w-full h-full bg-white text-black grid grid-cols-1 grid-rows-[300px_2rem_2fr_2fr]   overflow-scroll ">
      <img src={recipe.image} className='w-full h-full col-start-1 col-end-2 bg-gray-700 object-cover object-center' alt={recipe.title} />
      <h2 className='font-bold'>{recipe.title}</h2>
      <div  className='font-poppins'>
      <h2 className='font-bold'>ingredients</h2>
      <ul>
        <li>ingredient</li>
        <li>ingredient</li>
        <li>ingredient</li>
        <li>ingredient</li>
      </ul>
      </div>
      <div className='font-poppins'> 
      <h3 className='font-bold'>Steps</h3>
      <ol>
        <li>step 1</li>
        <li>step 2</li>
        <li>step 3</li>
        <li>step 4</li>
      </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
