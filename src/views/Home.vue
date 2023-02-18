<template>
  <Navbar />
  <div class="home">
    <div class="hero-section">
      <div class="main-container">
        <div class="hero-content-wrapper">
          <div class="hero-items-wrapper">
            <Item 
              v-for="(item, index) in data"
              :key="index"
              :uid="item.id"
              :image="item.item_image"
              :name="item.item_name"
              :price="item.item_price"
            />
          </div>
        </div>
      </div>
    </div>
    
    <div class="main-container">
      <h3 class="secondary-heading">Featured</h3>
        <div class="content-section overflow-x-scroll">
          <Item 
              v-for="(item, index) in featuredItems"
              :key="index"
              :uid="item.id"
              :image="item.item_image"
              :name="item.item_name"
              :price="item.item_price"
            />
        </div>
        <br><hr />
      <h3 class="secondary-heading">New Additions</h3>
        <div class="content-section overflow-x-scroll">
          <Item 
              v-for="(item, index) in data"
              :key="index"
              :uid="item.id"
              :image="item.item_image"
              :name="item.item_name"
              :price="item.item_price"
            />
        </div>
        <br>
    </div>

  </div>
</template>

<script setup>
// @ is an alias to /src
import { reactive, computed, ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Item from '@/components/Item.vue'
import MockData from '@/mock/mock-data.json'

const data = ref(MockData);

const featuredItems = computed(() => {
  return data.value.filter((item) => item.isFeatured );
})
</script>
