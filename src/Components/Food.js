// import React, { useEffect, useState } from 'react'
// import Recipe from './Recipe';
// import { NavLink,Route,Routes } from 'react-router-dom';
// import Cards from './Cards';

// const Food = () => {

//     const [search, setSearch] = useState("");
//     const [data,setData] = useState()
//     const [msg, setMsg] = useState("Search and Get Recipe's")

//     const handleInput = (event) =>{
//         setSearch(event.target.value);
//     }

//     const myFun = async () =>{
         
//         if(search === ""){
//             setMsg("Please Enter Something")
//         }else{
//         const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
//         const jsonData = await get.json();
//         console.log(jsonData.meals);
//         setData(jsonData.meals)
//         setMsg("Your Search Result's")
         
//         }
         
//     }
     
    
//   return (
//     <>
//          <h1 className='head'>FOOD RECIPE APP</h1>
//         <div className='container'>
//             <div className='searchBar'>
//                 <input placeholder='Search Meals' type='text' onChange={handleInput}/>
//                 <button onClick={myFun}>Search</button>
//             </div>
//             <h2 style={{
//                 "paddingTop":"25px",
//                 "width": "100%",
//                 "textAlign":"center",
//                 "fontFamily":"sans-serif"
//                 // "backgroundColor":"red"
//             }}>{msg}</h2>
//              <div>
//              <Cards detail={data}/>
//              </div>
//         </div>
//     </>
//   )
// }

// export default Food
import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { NavLink, Route, Routes } from 'react-router-dom';
import Cards from './Cards';

const Food = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState();
    const [msg, setMsg] = useState("Search and Get Recipe's");

    const handleInput = (event) => {
        setSearch(event.target.value);
    }

    const myFun = async () => {
        if (search === "") {
            setMsg("Please Enter Something");
        } else {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
            console.log(jsonData.meals);
            setData(jsonData.meals);
            setMsg("Your Search Results");
        }
    }

    return (
        <>
            <h1 style={{
                fontSize: "2.5rem",
                color: "#ff7f50",
                textAlign: "center",
                padding: "20px 0",
                margin: "0"
            }}>
                FOOD RECIPE APP
            </h1>

            <div style={{
                width: "80%",
                margin: "0 auto",
                padding: "20px",
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                maxWidth: "600px"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "20px 0"
                }}>
                    <input
                        placeholder='Search Meals'
                        type='text'
                        onChange={handleInput}
                        style={{
                            padding: "10px",
                            width: "70%",
                            fontSize: "1rem",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            transition: "all 0.3s ease"
                        }}
                    />
                    <button
                        onClick={myFun}
                        style={{
                            padding: "10px 20px",
                            fontSize: "1rem",
                            color: "#fff",
                            backgroundColor: "#ff7f50",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#e67348"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#ff7f50"}
                    >
                        Search
                    </button>
                </div>

                <h2 style={{
                    paddingTop: "10px",
                    width: "100%",
                    textAlign: "center",
                    fontFamily: "sans-serif",
                    fontSize: "1.2rem",
                    color: "#555"
                }}>
                    {msg}
                </h2>

                {/* <div style={{
                    "display":"flex"
                }}>
                    <Cards detail={data} />
                </div> */}
            </div>
            <Cards detail={data} />
        </>
    );
}

export default Food;
