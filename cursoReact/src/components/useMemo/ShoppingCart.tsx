//Ejemplo de uso de useMemo para optimizar el rendimiento de un carrito de compras
// Tenemos una lista de compras y ya se calculó el total de la compra
// Si no agregamos nada ni tampoco cambio nada, cual es el costo total? 

import { useMemo, useRef, useState } from "react";

interface Item {
    id: number;
    name: string;
    price: number;
}

export const ShoppingCart = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'Apple', price: 1.2 },
        { id: 2, name: 'Banana', price: 0.8 },
        { id: 3, name: 'Orange', price: 1.5 }
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const [discount, setDiscount] = useState<number>(0);

    const totalCost = useMemo(() => {
        return items.reduce((total, item) => total + item.price, 0);
    }
        , [items]);

    const finalCost = useMemo(() => {
        return totalCost - discount;
    }
        , [totalCost, discount]);

    const setDiscountValue = () => {
        const value = inputRef.current?.value;
        if (value) {
            const discountValue = parseFloat(value);
            if (discountValue < 0 || discountValue > totalCost) {
                alert("El descuento debe ser un valor entre 0 y el total de la compra.");
                return;
            }
            if (!isNaN(discountValue)) {
                setDiscount(discountValue);
            } else {
                alert("Por favor, ingresa un número válido para el descuento.");
            }
        } else {
            alert("Por favor, ingresa un valor para el descuento.");
        }
    }
    const addItem = () => {
        const item: Item = {
            id: items.length + 1,
            name: `Item ${items.length + 1}`,
            price: Math.random() * 10 // Genera un precio aleatorio entre 0 y 10
        };
        setItems([...items, item]);
    }

    return (
        <>
            <h2>Lista de compras</h2>
            <p>Costo total {totalCost.toFixed(2)}</p>
            <p> Costo final {finalCost.toFixed(2)}</p>
            <input type="number" ref={inputRef} />
            <button onClick={addItem}>Agregar item</button>
            <button onClick={setDiscountValue}>Establecer descuento</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>

        </>
    );
}
