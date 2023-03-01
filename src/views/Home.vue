<template>
  <Navbar />
  <div class="home">
    <div class="hero-section">
      <div class="main-container">
        <div class="hero-content-wrapper">
          <div class="hero-items-wrapper">
            <swiper 
              :slides-per-view="slides"
              :navigation="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="(item, index) in data" :key="index">
                <Item 
                  :key="index"
                  :uid="item.id"
                  :image="item.image"
                  :carMake="item.carMake"
                  :carModel="item.carModel"
                  :price="item.price"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <hr />
      </div>
    </div>
    
    <div class="main-container">
      <h3 class="secondary-heading">Featured</h3>
        <div class="content-section">
          <swiper 
              :slides-per-view="slides"
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
                  :image="item.image"
                  :carMake="item.carMake"
                  :carModel="item.carModel"
                  :price="item.price"
                />
              </swiper-slide>
            </swiper>
        </div>
        <hr />

      <h3 class="secondary-heading">New Additions</h3>
        <div class="content-section">
          <swiper 
              :slides-per-view="slides"
              :pagination="{
                clickable: true
              }"
              :navigation="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="(item, index) in newAdditions" :key="index">
                <Item 
                  :key="index"
                  :uid="item.id"
                  :image="item.image"
                  :carMake="item.carMake"
                  :carModel="item.carModel"
                  :price="item.price"
                />
              </swiper-slide>
            </swiper>
        </div>
        <br>
    </div> 

  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, reactive, computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper'
import Navbar from '@/components/Navbar.vue'
import Item from '@/components/Item.vue'
import MockData from '@/mock/mock-data-cars.json'
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
    const cart = ref([]);
    const date = new Date('2023-01-01');
    const slides = ref(0);

    const featuredItems = computed(() => {
    return data.value.filter((item) => item.isFeatured );
    });

    const newAdditions = computed(() => {
      return data.value.filter((item) => {
        const itemDate = new Date(item.date_added);
        return itemDate.getTime() > date.getTime();
      })
    })

    onMounted(() => {
      if(!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify(cart.value));
      }

      if(!localStorage.getItem('cars')) {
        localStorage.setItem('cars', JSON.stringify(MockData));
      }

      if(/Android|iPhone/i.test(navigator.userAgent) === true) {
        slides.value = 1;
      } else {
        slides.value = 3;
      }

    })

    return {
      Navbar,
      Item,
      data,
      slides,
      Swiper,
      SwiperSlide,
      newAdditions,
      featuredItems,
      modules: [Autoplay, Pagination, Navigation]
    }
  }
} 
</script>
