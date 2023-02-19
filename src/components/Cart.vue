<template>
   <div class="backdrop">
    <div class="modal">
        <div class="modal-header-wrapper">
            <h2 class="modal-header">Your cart</h2>
            <p @click="$emit('closeCart')">X</p>
        </div>
        <div class="items-wrapper">
            <div class="cart-item" v-for="(item, index) in cart" :key="index">
                <img :src="item.itemImage" :alt="item.itemName" class="item-img">
                <div class="item-info-wrapper">
                    <div class="item-info-header">
                        <p>{{ item.itemName }}</p>
                        <p>X</p>
                    </div>
                    <p class="item-quantity">QTY: <span> {{ item.quantity }}</span></p>
                    <div class="item-info-footer">
                        <div class="update-item-amount">
                            <button class="decrease-item-qty btn-qty">-</button>
                            <button class="increase-item-qty btn-qty">+</button>
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

        onMounted(() => {
            const cartData = JSON.parse(localStorage.getItem('cart'));
            if(cartData.length === 0) {

            } else {
                cart.value = cartData;
            }
        })

        return {
            cart
        }
    }
}

</script>