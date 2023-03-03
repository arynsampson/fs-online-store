<template>
  <header class="header">
    <div class="main-container">
      <div class="header-content-wrapper">
        <div class="logo-wrapper">
          <img src="https://via.placeholder.com/150x50/fff/?text=FSOnlineStore" alt="logo" class="logo">
        </div>
          <nav class="navbar" ref="navbar">
            <button class="nav-menu-close" @click="toggleNav">X</button>
            <router-link to="/" class="nav-item">Home</router-link>
            <router-link to="/shop" class="nav-item">Shop</router-link>
            <router-link to="/about" class="nav-item">About</router-link>
            <router-link to="/contact" class="nav-item">Contact</router-link> 
          </nav>
          <button class="button" @click="toggleCart">Cart</button>
          <button class="nav-menu-open" @click="toggleNav" ref="closeNav">NAV</button>
      </div>
    </div>
  </header>
  <Cart v-if="showCart" @closeCart="toggleCart"/>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Cart from '@/components/Cart.vue'

const showCart = ref(false);
const showNav = ref(false);
const navbar = ref(null);
const closeNav = ref(null);

onMounted(() => {
  if(window.screen.width > 767) {
    navbar.value.classList.add('flex');
    navbar.value.style.position = 'static';
    navbar.value.style.height = '100%';
    closeNav.value.style.display = 'none';
  }
})

const toggleCart = () => {
  showCart.value = !showCart.value;
  if(showCart.value === true) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}

const toggleNav = () => {
  showNav.value = !showNav.value;
  if(showNav.value === true) {
    navbar.value.style.display = 'flex';
  } else {
    navbar.value.style.display = 'none';
  }
}
</script>
