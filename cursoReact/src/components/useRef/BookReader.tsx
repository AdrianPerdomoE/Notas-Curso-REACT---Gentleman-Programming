//  Ejemplo de uso de useRef para acceder a un elemento del DOM
// Un marcador de una referencia en el DOM para guardar la ultima posicion del scroll, no modifica el DOM directamente

import { useRef, useState } from "react";



export const BookReader = () => {
    const currentPageRef = useRef<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(currentPageRef.current);
    const nextPage = () => {
        currentPageRef.current += 1;
        console.log(`Current page: ${currentPageRef.current}`);
        setCurrentPage(currentPageRef.current);
    }
    const previousPage = () => {
        if (currentPageRef.current === 1) {
            console.log("You are already on the first page.");
            return;
        }

        currentPageRef.current -= 1;
        console.log(`Current page: ${currentPageRef.current}`);
        setCurrentPage(currentPageRef.current);

    }
    const goToPage = (page: number) => {
        if (page < 1) {
            console.log("Page number must be greater than 0.");
            return;
        }
        currentPageRef.current = page;
        console.log(`Current page: ${currentPageRef.current}`);
        setCurrentPage(currentPageRef.current);
    }

    return (
        <>
            <h2>Lectura de libro</h2>
            <p>Pagina actual: {currentPage}</p>
            <div className="controlButtons">
                <button onClick={previousPage}>Pagina anterior</button>
                <button onClick={nextPage} >Pagina siguiente</button>
                <button onClick={() => { goToPage(50) }}>Ir a la pagina 50</button>
            </div>
        </>
    );
}

