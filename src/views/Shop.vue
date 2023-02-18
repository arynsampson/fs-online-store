<template>
  <Navbar />
    <div class="shop">
      <div class="main-container">
        <div class="shop-content">
          <div class="data-manips">

          </div>
          <div class="shop-items">
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
</template>

<script setup>
// @ is an alias to /src
import {ref} from 'vue'
import MockData from '@/mock/mock-data.json'
import Navbar from '@/components/Navbar.vue'
import Item from '@/components/Item.vue'

const data = ref(MockData);

</script>