import { useEffect, useRef, useState } from "react";

import SubComponente from "./SubComponente";

function App() {

  let contador = 0
  const [contadorState, setContadorState] = useState(0);
  const contadorRef = useRef(4);
  const [mostrarSubcomponente, setMostrarSubcomponente] = useState(true);

  function sumaContador() {
    contador++
    console.log(contador)
  }

  function sumaState() {
    setContadorState(contadorState + 1)
  }

  function sumaRef() {
    contadorRef.current += 1;
    console.log(contadorRef);
  }

  useEffect(
    () => {
      console.log("Renderizando por primera vez");
    },
    []
  )

  useEffect(
    () => {
      console.log("Renderizando con contadorState");
    },
    [contadorState]
  )

  return (
    <>
      <h1>Variable: {contador}</h1>
      <h1>State: {contadorState}</h1>
      <h1>Ref: {contadorRef.current}</h1>
      <button onClick={sumaContador}>suma variable</button>
      <button onClick={sumaState}>suma a state</button>
      <button onClick={sumaRef}>suma a ref</button>
      <button onClick={
        () => setMostrarSubcomponente(!mostrarSubcomponente)
      }>Toggle subcomponente</button>
      {mostrarSubcomponente && <SubComponente contadorSuperior={sumaState} />}
    </>

  );
}

export default App;
