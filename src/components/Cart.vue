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
                <div class="cart-img-wrapper">
                    <img :src="item.image" :alt="item.carModel" class="item-img">
                </div>
                <div class="item-info-wrapper">
                    <div class="item-info-header">
                        <router-link :to="{ name: 'lookbook', params: { id: item.id } }">{{ item.carMake }} {{ item.carModel }}</router-link>
                        <p class="cursor-pointer" @click="removeItem(item.carModel, index)">X</p>
                    </div>
                    <p class="item-quantity">QTY: <span> {{ item.quantity }}</span></p>
                    <div class="item-info-footer">
                        <div class="update-item-amount">
                            <button class="decrease-item-qty btn-qty" @click="decQuantity(item.carModel, index)">-</button>
                            <button class="increase-item-qty btn-qty" @click="incQuantity(item.carModel, index)">+</button>
                        </div>
                        <p class="item-price">R{{ item.price }}</p>
                    </div>
                </div>

            </div>
        </div>
        <div class="total-cost-wrapper">
            <p>Your total: R {{ cost }}</p>
        </div>
    </div>
   </div>
</template>

<script>
import { ref, onMounted, inject } from 'vue'

export default {
    setup() {

        const cart = ref([]);
        const msg = ref('');
        const cost = ref(0);
        const cartCount = inject('cartCount');

        // remove item from cart
        const removeItem = (carModel, index) => {
            cart.value.forEach((item) => {
                if(item.carModel === carModel) {
                    cart.value.splice(index, 1);
                    cost.value -= parseInt(item.price) * item.quantity;
                }
            })
            if(cart.value.length === 0 ) {
                cost.value = 0;
            }
            cartCount.value -= 1;
            localStorage.setItem('cart', JSON.stringify(cart.value));
        }

        // increase item quantity in cart
        const incQuantity = (carModel) => {
            cart.value.forEach((item) => {
                if(item.carModel === carModel) {
                    item.quantity += 1;
                    cost.value += parseInt(item.price);
                }
            })
            localStorage.setItem('cart', JSON.stringify(cart.value));
        }

        // decrease item quantity in cart
        const decQuantity = (carModel, index) => {
            cart.value.forEach((item) => {
                if(item.carModel === carModel) {
                    item.quantity -= 1;
                    cost.value -= parseInt(item.price);
                    if(item.quantity === 0) {
                        removeItem(carModel, index)
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
                    cost.value += item.price * item.quantity
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