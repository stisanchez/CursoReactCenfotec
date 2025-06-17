import React, { useState,useEffect } from 'react'

function UseEffectApi() {
  const [posts,setPosts]=useState([]);
  const [id,setId]=useState(1)
  /*const [idFromButton,setIdFromButton]=useState(1)*/
  const handleClick=()=>{
   /* setIdFromButton(id)*/
  }

  useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/posts/" )
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        console.log(data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

//   .then(()=>{
//     console.log("End of fetching data")
//   })

  return (
    <div>
      <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
      <button type='button' onClick={handleClick}>Fetch Post</button>
      <h4>{posts.map((data, index) => {
      console.log(index+' '+data.title)
      }
    )}
        </h4>
    </div>
  )
}
export default UseEffectApi