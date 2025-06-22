import { createRoot } from 'react-dom/client'
import './CSS/indexGeneral.css'
import ListaPeliculas from './data/postData.json'
import Pelicula from './PeliculasCards/Pelicula.jsx'
import Encabezado from './PeliculasCards/Encabezado.jsx'
import Hooks from './Hooks/Hooks.jsx'
import UseEffect from './Hooks/userEffect.jsx'
import UseEffectApi_Mult  from './Hooks/UseEffectApi_Mult.jsx'
import UseEffectApi_Indv from './Hooks/useEffectApi_Indv.jsx'


createRoot(document.getElementById('root'))
.render(
  <div className="contenedor">

    {/* <Encabezado/>
    <div className="contenido">
      {
        ListaPeliculas.map((item, index) => (
          <Pelicula
            key={index}
            item = {item}
          />
        ))
      }
    </div> */}
    
    {/* <Hooks/> */}
    {/* <UseEffect/> */}
    {/* <UseEffectApi_Indv/> */}
    <UseEffectApi_Mult/>
  </div>
)