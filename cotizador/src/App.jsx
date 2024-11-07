import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Mensaje from './components/Mensaje'
import { useState } from 'react'

function App() {

  const [cantidad, setCantidad] = useState (0);
  const [plazo, setPlazo] = useState ("");
  const [total, setTotal] = useState (0);

  let componente;
  if (total === 0){
    componente = <Mensaje/>
  } else {
    componente =<Resultado
          cantidad={cantidad} plazo={plazo} total={total}/>
  }

  return (
    <div>
      <Header titulo= "Cotizador de Prestamos"/>
      <div className="container">
        <Formulario 
          cantidad={cantidad} setCantidad={setCantidad}
          plazo={plazo} setPlazo={setPlazo}
          total={total} setTotal={setTotal}
        />
      </div>
      <div className="mensaje">
        {componente}
      </div>
    </div>
  )
}

export default App
