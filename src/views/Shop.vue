<template>
  <Navbar />
    <div class="shop">
      <div class="main-container">
        <div class="shop-content">
          <div class="data-manips">
            <form>
              <input type="text" v-model="searchVal" placeholder="Search items" @keyup="worker('search')">
              <div>
                <select name="sort" id="sort" @change="worker($event.target.value)">
                  <option>Choose sort</option>
                  <option value="asc">Name A-Z</option>
                  <option value="desc">Name Z-A</option>
                  <option value="priceASC">Price low - high</option>
                  <option value="priceDESC">Price high-low</option>
                </select>
              </div>
              <div>
                <select name="filter" id="filter" @change="worker($event.target.value)">
                  <option>Choose filter</option>
                  <option v-for="(car, index) in data" :value="car.carMake" :key="index">{{ car.carMake }}</option>
                </select>
              </div>
            </form>
          </div>
          <div class="shop-items hidden">
            <Item 
              v-for="(item, index) in data"
              :key="index"
              :uid="item.id"
              :image="item.image"
              :carMake="item.carMake"
              :carModel="item.carModel"
              :price="item.price"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
// @ is an alias to /src
import { ref, computed, onMounted, watch } from 'vue'
import MockData from '@/mock/mock-data-cars.json'
import Navbar from '@/components/Navbar.vue'
import Item from '@/components/Item.vue'

const data = ref(MockData);
const searchVal = ref('');
const sort = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((el) => observer.observe(el));
})

watch(searchVal, (newSearchVal, oldSearchVal) => {
  if(newSearchVal === '') {
    data.value = MockData;
  }
})

const worker = workerVal => {

  switch (workerVal) {
    case 'search':
      const searchResults = computed(() => {
        return data.value.filter((item) => item.carMake.toLowerCase().includes(searchVal.value));
        return (data.value.filter((item) => item.carMake.toLowerCase().includes(searchVal.value) || item.carModel.toLowerCase().includes(searchVal.value)))
      });
      data.value = searchResults.value;
    break;

    case 'asc':
      const sortResultsASC = computed(() => {
        return data.value.sort(function (a, b) {
          let itemA = a.carMake.toUpperCase();
          let itemB = b.carMake.toUpperCase();
          return itemA < itemB ? -1 : itemA > itemB ? 1 : 0;
        })
      });
      data.value = sortResultsASC.value;
    break;

    case 'desc':
      const sortResultsDESC = computed(() => {
        return data.value.sort(function (a, b) {
          let itemA = a.carMake.toUpperCase();
          let itemB = b.carMake.toUpperCase();
          return itemA > itemB ? -1 : itemA < itemB ? 1 : 0;
        })
      });
      data.value = sortResultsDESC.value;
    break;

    case 'priceASC':
      const sortResultsPriceASC = computed(() => {
        return data.value.sort(function (a, b) {
          let itemA = a.price;
          let itemB = b.price;
          return itemA < itemB ? -1 : itemA > itemB ? 1 : 0;
        })
      });
      data.value = sortResultsPriceASC.value;
    break;

    case 'priceDESC':
      const sortResultsPriceDESC = computed(() => {
        return data.value.sort(function (a, b) {
          let itemA = a.price;
          let itemB = b.price;
          return itemA > itemB ? -1 : itemA < itemB ? 1 : 0;
        })
      });
      data.value = sortResultsPriceDESC.value;
    break;
      // const filterCarMake = computed(() => {
      //   return data.value.filter((item) => item.carMake.toLowerCase().includes(workerVal));
      // });
      // data.value = filterCarMake;
  }
}
</script>

