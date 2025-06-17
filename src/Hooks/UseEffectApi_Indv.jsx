import React, { useState, useEffect } from 'react'

function UseEffectApi_Indv() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)

    const handleClick = () => {
        setIdFromButton(id)
    }

    useEffect(() => {
        fetch("https://dragonball-api.com/api/characters/" + idFromButton)
            .then(res => res.json())
            .then(data => {
                setPost(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [idFromButton]);

    return (
        <div>
            <h1>UseEffect Individual</h1>
            <br></br>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Buscar</button>
            <br></br>
            {post.name}
        </div>
    )
}

export default UseEffectApi_Indv;