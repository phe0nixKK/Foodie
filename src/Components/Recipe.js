import React, { useState, useEffect } from 'react'
import { NavLink, json, useParams } from 'react-router-dom';
import '../index.css';

const Recipe = ({ detail }) => {
  const [data, setData] = useState()
  const { meal } = useParams();
  const myFun = async () => {
    // const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
    const jsonData = await get.json();
    // console.log(jsonData.meals[0])
    setData(jsonData.meals[0])
  }

  if (meal != "") {
    myFun()
  }




  /*  return (
     <>
     {!data ?  "Not Found" :  
     
     <div className='msg'>
       
      <img src={data.strMealThumb}/>
         <div className='info'>
         <h1>Recipe Detail's</h1>
          <button>{data.strMeal}</button>
         <h3>Intructions :</h3>
         <p>{data.strInstructions}</p>
         </div>
     </div> }
         
     </> */
  return (
    <>
      {!data ? "Not Found" :

        <div className='msg'>

          <img src={data.strMealThumb} />
          <div className='info'>
            <h1>Recipe Detail's</h1>
            <button>{data.strMeal}</button>
            <h3>Intructions :</h3>
            <p>{data.strInstructions}</p>
          </div>
        </div>}

    </>

  )
}

export default Recipe;

