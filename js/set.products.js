
const apiUrl = 'http://localhost:3000/items';

import getProductData from "./get.products.js";

export default async function setProducts() {

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Ocurrio un error en la respuesta al servidor');
        }
        const data = await response.json();
        // Se obtienen los productos getProductData
        getProductData();

        // Setiar los productos en LocalStorage

        // Mostramos los productos en el DOM
        displayData(data);

    } catch (error) {
        console.error('Ups! ocurrio un error en la ejecucion:', error);
    }
}

function displayData(data) {

    console.info(data);
}