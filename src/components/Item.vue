<template>
    <div class="item-wrapper">
        <img src="https://via.placeholder.com/198x237" alt="item-img" class="item-card-img">
        <div class="add-to-cart-btn" @click="addToCart(uid)"></div>
        <div class="item-card-info-wrapper">
            <router-link :to="{ name: 'lookbook', params: { id: uid } }">{{ carMake }} {{ carModel }}</router-link>
            <p class="item-card-price">R {{ price }}</p>
        </div>
    </div>
</template>

<script setup>
import  { reactive } from 'vue'

const props = defineProps(['uid', 'image', 'carMake', 'carModel', 'price']);

const addToCart = (itemID) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const items = JSON.parse(localStorage.getItem('items'));
    const item = reactive({})

    for(let x = 0; x < items.length; x++) {
        if(items[x].id === itemID) {
            item.value = items[x];

        }
    }
    
    cart.push({
        itemID: item.value.id,
        itemName: item.value.item_name,
        itemPrice: item.value.item_price,
        itemImage: item.value.item_image,
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