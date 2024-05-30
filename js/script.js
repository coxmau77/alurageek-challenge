import setProducts from "./set.products.js";

const form = document.querySelector('[data-form]');
const input = document.querySelectorAll('[data-input]');
const submit = document.getElementById('btn-submit');

document.addEventListener('DOMContentLoaded', function () {

    // cargar la vista de los productos existentes
    setProducts();

    // Cargar nuevos productos
    form.addEventListener('submit', eventForm => {
        eventForm.preventDefault();

        const inputValues = {
            name: eventForm.target.elements['name'].value,
            price: eventForm.target.elements['price'].value,
            image: eventForm.target.elements['image'].value,
        }
        eventForm.target.reset()
        console.log(inputValues);

        // Agregar el producto nuevo

    });


});