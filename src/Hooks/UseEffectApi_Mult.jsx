import React, { useState, useEffect } from 'react'
import Pelicula from '../DragonBall/CardDBZ.jsx'
import CardDBZ from '../DragonBall/CardDBZ.jsx';

function UseEffectApi_Mult() {
  const [posts, setPosts] = useState([]);
  // const [id, setId] = useState(1)
  // const handleClick = () => {
  // }
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then(res => res.json())
      .then(data => {
        setPosts(data.items);
        // console.log(data.items)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  
  return (
    <div className='contenedorDBZ'>
      {/* <h1>UseEffect Multiple</h1>
      <br></br>
      <input type='text' value={id} onChange={e => setId(e.target.value)} />
      <button type='button' onClick={handleClick}>Consultar</button> */}
      {
        posts.map((data, index) => {
          //console.log(data)
          return (
            <CardDBZ
              key={index}
              item={data}
            /> 
          )
        })
      }
    </div>
  )
}
export default UseEffectApi_Mult