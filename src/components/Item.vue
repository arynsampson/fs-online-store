<template>
    <div class="item-wrapper">
        <div class="item-img-wrapper">
            <img src="https://static.vecteezy.com/system/resources/previews/001/193/930/original/vintage-car-png.png" alt="item-img" class="item-card-img">
        </div>
        <div class="item-card-info-wrapper">
            <router-link :to="{ name: 'lookbook', params: { id: uid } }">{{ carMake }} {{ carModel }}</router-link>
            <p class="item-card-price">R {{ price }}</p>
        </div>
        <button class="add-to-cart-btn button" @click="addToCart(uid)">Add to cart</button>
    </div>
</template>

<script setup>
import  { reactive } from 'vue'

const props = defineProps(['uid', 'image', 'carMake', 'carModel', 'price']);

const addToCart = (itemID) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cars = JSON.parse(localStorage.getItem('cars'));
    const item = reactive({})

    for(let x = 0; x < cars.length; x++) {
        if(cars[x].id === itemID) {
            item.value = cars[x];
        }
    }
    
    cart.push({
        itemID: item.value.id,
        carMake: item.value.carMake,
        carModel: item.value.carModel,
        price: item.value.price,
        image: item.value.image,
        quantity: 1
    });

    // for(let x = 0; x < cart.length; x++) {
    // if(cart[x].itemID === itemID) {
    //     alert('You already have this item in your cart.');
    // } else {
    //     // cart.push({
    //     // itemID: this.item.id,
    //     // itemName: this.item.item_name,
    //     // itemPrice: this.item.item_price,
    //     // itemImage: this.item.item_image,
    //     // quantity: 1
    //     // });
    // }
    // }

    localStorage.setItem('cart', JSON.stringify(cart));
}
</script>