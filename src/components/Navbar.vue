<template>
  <header class="header">
    <div class="main-container">
      <div class="header-content-wrapper">
        <div class="logo-wrapper"><img src="https://via.placeholder.com/150x50/fff/?text=FSOnlineStore" alt="logo" class="logo"></div>
          <nav class="navbar">
            <router-link to="/" class="nav-item">Home</router-link>
            <router-link to="/shop" class="nav-item">Shop</router-link>
            <router-link to="/about" class="nav-item">About</router-link>
            <router-link to="/contact" class="nav-item">Contact</router-link> 
          </nav>
          <button class="button" @click="toggleCart">Cart</button>
      </div>
    </div>
  </header>
  <Cart v-if="showCart" @closeCart="toggleCart"/>
</template>

<script setup>
import { ref } from 'vue'
import Cart from '@/components/Cart.vue'

const showCart = ref(false);

const toggleCart = () => {
  showCart.value = !showCart.value;
  if(showCart.value === true) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}
</script>
