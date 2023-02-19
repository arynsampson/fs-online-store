<template>
  <Navbar />
    <div class="lookbook">
      <div class="main-container">
        <p><img :src="item.item_image" alt=""></p>
        <p>{{ item.item_name }}</p>
        <p>{{ item.item_price }}</p>
      </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
import { onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import MockData from '@/mock/mock-data.json'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      data: [],
      item: {}
    }
  },  
  setup() {

    return {
      Navbar
    }
  },
  mounted() {
    this.data = MockData
    this.data.forEach((item) => {
      if(item.id == this.$route.params.id) {
        this.item = item;
      }
    })
  }
}
</script>