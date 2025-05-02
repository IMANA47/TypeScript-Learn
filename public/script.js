"use strict";
const form = document.getElementById('form');
const type = document.getElementById('type');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const address = document.getElementById('address');
const country = document.getElementById('country');
const town = document.getElementById('town');
const zip = document.getElementById('zip');
const product = document.getElementById('product');
const price = document.getElementById('price');
const quantity = document.getElementById('quantity');
const tva = document.getElementById('tva');
//submit form
form.addEventListenerListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, firstname.value);
});
