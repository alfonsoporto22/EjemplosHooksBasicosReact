import { useEffect, useState } from "react";

function SubComponente ({contadorSuperior}) {

    const [ contador, setContador ] = useState(0)

    function suma() {
        setContador(contador+1)
    }

    useEffect(
        ()=>{
          console.log("Renderizando subcomponente por primera vez");
          return ()=>{
            console.log("Saliendo del subcomponente.");
          }
        },
        []
    )

    useEffect(
        ()=>{
          console.log("Cambio en prop");
        },
        [contadorSuperior]
    )

    return (
        <>
            <h1>No hago nada: {contador}</h1>
            <button onClick={suma}>+</button>
        </>
    );
}

export default SubComponente;