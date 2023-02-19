<template>
   <div class="backdrop">
    <div class="modal">
        <div class="modal-header-wrapper">
            <h2 class="modal-header">Your cart</h2>
            <p @click="$emit('closeCart')">X</p>
        </div>
        <div class="items-wrapper">
            <p> {{ msg }} </p>
            <div class="cart-item" v-for="(item, index) in cart" :key="index">
                <img :src="item.itemImage" :alt="item.itemName" class="item-img">
                <div class="item-info-wrapper">
                    <div class="item-info-header">
                        <p>{{ item.itemName }}</p>
                        <p @click="removeItem(item.itemName, index)">X</p>
                    </div>
                    <p class="item-quantity">QTY: <span> {{ item.quantity }}</span></p>
                    <div class="item-info-footer">
                        <div class="update-item-amount">
                            <button class="decrease-item-qty btn-qty" @click="decQuantity(item.itemName, index)">-</button>
                            <button class="increase-item-qty btn-qty" @click="incQuantity(item.itemName, index)">+</button>
                        </div>
                        <p class="item-price">R{{ item.itemPrice }}</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    </div>
   </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    setup() {

        const cart = ref([]);
        const msg = ref('');

        const removeItem = (itemName, index) => {
            cart.value.forEach((item) => {
                if(item.itemName === itemName) {
                    cart.value.splice(index, 1);
                }
            })
            localStorage.setItem('cart', JSON.stringify(cart.value));
        }

        const incQuantity = (itemName) => {
            cart.value.forEach((item) => {
                if(item.itemName === itemName) {
                    item.quantity += 1;
                }
            })
            localStorage.setItem('cart', JSON.stringify(cart.value));
        }

        const decQuantity = (itemName, index) => {
            cart.value.forEach((item) => {
                if(item.itemName === itemName) {
                    item.quantity -= 1;
                    if(item.quantity === 0) {
                        removeItem(itemName, index)
                    }
                }
            })
            localStorage.setItem('cart', JSON.stringify(cart.value));
        }

        onMounted(() => {
            const cartData = JSON.parse(localStorage.getItem('cart'));
            if(cartData.length === 0) {
                msg.value = 'No items.';
            } else {
                cart.value = cartData;
            }
        })

        return {
            cart,
            msg,
            removeItem,
            incQuantity,
            decQuantity
        }
    }
}

</script>