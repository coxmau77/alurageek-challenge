// // URL del servidor JSON
// const apiUrl = 'http://localhost:3000/items';

// import getProductData from "./get.products.js";

// export default async function getProductData() {

//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error('Ocurrio un error en la respuesta al servidor');
//         }
//         const data = await response.json();
//         // Se obtienen los productos getProductData

//         // Setiar los productos en LocalStorage

//         // Mostramos los productos en el DOM
//         displayData(data);

//     } catch (error) {
//         console.error('Ups! ocurrio un error en la ejecucion:', error);
//     }
// }

// function displayData(data) {

//     console.log(data);
// }

export default function getProductData() {
    // const storageData = localStorage.getItem('items');
    // const objectProducts = JSON.parse(storageData);
    // localStorage.setItem('items', JSON.stringify(products));

    console.log("setiando productos al localStorage");
}
