import React from 'react'
import { NavLink } from 'react-router-dom';

const Mealcards = ({detail}) => {
    // console.log(detail);
  return (
    <div className='meals'>
        {!detail ? "Data Not Found" : detail.map((curItem)=>{
            return (
                <div className='mealImg'>
                  <img src={curItem.strMealThumb}/>
                  <p>{curItem.strMeal}</p>
                  <NavLink to={`/${curItem.idMeal}`}><button >Recipe</button></NavLink>
                   
                </div>
            )
        }) 
         
        }
    </div>
  )
}

export default Mealcards
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Mealcards = ({ detail }) => {
//     console.log(detail);

//     return (
//         <div style={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             gap: '20px',
//             justifyContent: 'center',
//             padding: '20px'
//         }}>
//             {!detail ? (
//                 <p style={{ fontSize: '1.5rem', color: '#ff7f50' }}>Data Not Found</p>
//             ) : (
//                 detail.map((curItem) => {
//                     return (
//                         <div
//                             key={curItem.idMeal}
//                             style={{
//                                 width: '250px',
//                                 padding: '15px',
//                                 backgroundColor: '#ffffff',
//                                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//                                 borderRadius: '8px',
//                                 textAlign: 'center',
//                                 transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                             }}
//                             onMouseOver={(e) => {
//                                 e.currentTarget.style.transform = 'scale(1.05)';
//                                 e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
//                             }}
//                             onMouseOut={(e) => {
//                                 e.currentTarget.style.transform = 'scale(1)';
//                                 e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
//                             }}
//                         >
//                             <img
//                                 src={curItem.strMealThumb}
//                                 alt={curItem.strMeal}
//                                 style={{
//                                     width: '100%',
//                                     height: '180px',
//                                     borderRadius: '8px',
//                                     marginBottom: '10px'
//                                 }}
//                             />
//                             <p style={{
//                                 fontSize: '1.2rem',
//                                 fontWeight: 'bold',
//                                 color: '#333',
//                                 margin: '10px 0'
//                             }}>{curItem.strMeal}</p>
//                             <NavLink to={`/${curItem.idMeal}`}>
//                                 <button style={{
//                                     padding: '10px 20px',
//                                     fontSize: '1rem',
//                                     backgroundColor: '#ff7f50',
//                                     color: '#ffffff',
//                                     border: 'none',
//                                     borderRadius: '4px',
//                                     cursor: 'pointer',
//                                     transition: 'background-color 0.3s ease',
//                                 }}
//                                     onMouseOver={(e) => e.target.style.backgroundColor = '#e67348'}
//                                     onMouseOut={(e) => e.target.style.backgroundColor = '#ff7f50'}
//                                 >
//                                     Recipe
//                                 </button>
//                             </NavLink>
//                         </div>
//                     );
//                 })
//             )}
//         </div>
//     );
// }

// export default Mealcards;
