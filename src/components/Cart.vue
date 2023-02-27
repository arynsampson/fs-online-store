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
                        <router-link :to="{ name: 'lookbook', params: { id: item.itemID } }">{{ item.itemName }}</router-link>
                        <p class="cursor-pointer" @click="removeItem(item.itemName, index)">X</p>
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
        </div>
        <div class="total-cost-wrapper">
            <p>R {{ cost }}</p>
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
        const cost = ref(0);

        const removeItem = (itemName, index) => {
            cart.value.forEach((item) => {
                if(item.itemName === itemName) {
                    cart.value.splice(index, 1);
                    cost.value -= parseInt(item.itemPrice) * item.quantity;
                }
            })
            if(cart.value.length === 0 ) {
                cost.value = 0;
            }
            localStorage.setItem('cart', JSON.stringify(cart.value));
        }

        const incQuantity = (itemName) => {
            cart.value.forEach((item) => {
                if(item.itemName === itemName) {
                    item.quantity += 1;
                    cost.value += parseInt(item.itemPrice);
                }
            })
            localStorage.setItem('cart', JSON.stringify(cart.value));
        }

        const decQuantity = (itemName, index) => {
            cart.value.forEach((item) => {
                if(item.itemName === itemName) {
                    item.quantity -= 1;
                    cost.value -= parseInt(item.itemPrice);
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
                cart.value.forEach((item) => {
                    cost.value += item.itemPrice * item.quantity
                })
            }
        })

        return {
            cart,
            msg,
            cost,
            removeItem,
            incQuantity,
            decQuantity
        }
    }
}

</script>