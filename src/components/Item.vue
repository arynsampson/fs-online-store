<template>
    <div class="item-wrapper">
        <div class="item-img-wrapper">
            <img src="https://static.vecteezy.com/system/resources/previews/001/193/930/original/vintage-car-png.png" alt="item-img" class="item-card-img">
        </div>
        <div class="item-card-info-wrapper">
            <router-link :to="{ name: 'lookbook', params: { id: uid } }" class="item-name">{{ carMake }} {{ carModel }}</router-link>
            <p class="item-card-price">R {{ price }}</p>
            <p>Colour: <span class="colour-block" :style="{background: colour}"></span>{{ colour }}</p>
        </div>
        <button class="add-to-cart-btn button" @click="addToCart(uid)">Add to cart</button>
    </div>
</template>

<script setup>
import  { reactive, inject } from 'vue'

const props = defineProps(['uid', 'image', 'carMake', 'carModel', 'price', 'colour']);
const cartCount = inject('cartCount');

const addToCart = (itemID) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cars = JSON.parse(localStorage.getItem('cars'));
    const item = reactive({})

    // set the car to add the item variable
    for(let x = 0; x < cars.length; x++) {
        if(cars[x].id == itemID) {
            item.value = cars[x];
        }
    }

    // check if item is already in cart
    for(let x = 0; x < cart.length; x++) {
        if(cart[x].id == item.value.id) {
            // block user from adding already existing item
            alert('This item is already in your cart. Open your cart to manage the item.');
            return 
        }
    }
    
    // add item to cart
    cart.push({
        id: item.value.id,
        carMake: item.value.carMake,
        carModel: item.value.carModel,
        price: item.value.price,
        image: item.value.image,
        quantity: 1
    });

    cartCount.value += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`You have added: ${item.value.carMake} ${item.value.carModel} to your cart.`);
}
</script>

<style scoped>
    .item-card-img:hover {
        transform: scale(1.3);
    }

    .item-name:hover {
        cursor: pointer;
        color: darkblue;
        text-decoration: underline;
    }
</style>