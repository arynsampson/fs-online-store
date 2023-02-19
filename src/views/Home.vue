<template>
  <Navbar />
  <div class="home">
    <div class="hero-section">
      <div class="main-container">
        <div class="hero-content-wrapper">
          <div class="hero-items-wrapper">
            <swiper 
              :slides-per-view="4"
              :pagination="{
                clickable: true
              }"
              :navigation="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="(item, index) in data" :key="index">
                <Item 
                  :key="index"
                  :uid="item.id"
                  :image="item.item_image"
                  :name="item.item_name"
                  :price="item.item_price"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    
    <div class="main-container">
      <h3 class="secondary-heading">Featured</h3>
        <div class="content-section">
          <swiper 
              :slides-per-view="4"
              :pagination="{
                clickable: true
              }"
              :navigation="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="(item, index) in featuredItems" :key="index">
                <Item 
                  :key="index"
                  :uid="item.id"
                  :image="item.item_image"
                  :name="item.item_name"
                  :price="item.item_price"
                />
              </swiper-slide>
            </swiper>
        </div>
        <br><hr /><!--
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
        </div>-->
        <br>
    </div> 

  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper'
import Navbar from '@/components/Navbar.vue'
import Item from '@/components/Item.vue'
import MockData from '@/mock/mock-data.json'
import 'swiper/css';  
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
  components: {
      Navbar,
      Item,
      Swiper,
      SwiperSlide,
  },
  setup() {
    const data = ref(MockData);

    const featuredItems = computed(() => {
    return data.value.filter((item) => item.isFeatured );
    })

    return {
      Navbar,
      Item,
      data,
      Swiper,
      SwiperSlide,
      featuredItems,
      modules: [Autoplay, Pagination, Navigation]
    }
  }
} 
</script>
