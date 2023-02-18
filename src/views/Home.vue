<template>
  <Navbar />
  <div class="home">
    <div class="hero-section">
      <div class="main-container">
        <div class="hero-content-wrapper">
          <div class="hero-items-wrapper">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </div>
    
    <div class="main-container">
      <h3 class="secondary-heading">Featured</h3>
        <div class="content-section">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <br><hr />
      <h3 class="secondary-heading">New Additions</h3>
        <div class="content-section">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
        <br>
    </div>

  </div>
</template>

<script setup>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Item from '@/components/Item.vue'

</script>
