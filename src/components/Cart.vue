<template>
   <div class="backdrop">
    <div class="modal">
        <div class="modal-header-wrapper">
            <h2 class="modal-header">Your cart</h2>
            <p @click="$emit('closeCart')">X</p>
        </div>
        <div class="items-wrapper">
            <div class="cart-item">
                <img src="http://via.placeholder.com/145x150" alt="item-img" class="item-img">
                <div class="item-info-wrapper">
                    <div class="item-info-header">
                        <p>Item name</p>
                        <p>X</p>
                    </div>
                    <p class="item-quantity">QTY: <span> 1</span></p>
                    <div class="item-info-footer">
                        <div class="update-item-amount">
                            <button class="decrease-item-qty btn-qty">-</button>
                            <button class="increase-item-qty btn-qty">+</button>
                        </div>
                        <p class="item-price">R4000</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    </div>
   </div>
</template>

<script setup>


</script>