<template>
  <Navbar />
    <div class="lookbook">
      <div class="main-container">
        <p><img :src="item.image" alt=""></p>
        <p>{{ item.carMake }} {{ item.carModel }}</p>
        <p>R{{ item.price }}</p>
        

        <button v-if="!inCart" @click="addToCart">Add to cart</button>
        <p v-else>Item is in cart</p>
      </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
import { onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      data: [],
      item: {},
      inCart: false
    }
  },  
  setup() {

    return {
      Navbar
    }
  },
  methods: {
    addToCart() {
      const cart = JSON.parse(localStorage.getItem('cart'));
    
        cart.push({
          itemID: this.item.id,
          itemName: this.item.carMake,
          itemPrice: this.item.price,
          itemImage: this.item.image,
          quantity: 1
        });

      // for(let x = 0; x < cart.length; x++) {
      //   if(cart[x].itemID === parseInt(this.$route.params.id)) {
      //       alert('You already have this item in your cart.');
      //   } else {
      //       // cart.push({
      //       // itemID: this.item.id,
      //       // itemName: this.item.item_name,
      //       // itemPrice: this.item.item_price,
      //       // itemImage: this.item.item_image,
      //       // quantity: 1
      //       // });
      //   }
      // }

      this.inCart = true;

      localStorage.setItem('cart', JSON.stringify(cart));
    }
  },
  mounted() {
    const cars = JSON.parse(localStorage.getItem('cars'));
    cars.forEach((item) => {
      if(item.id == this.$route.params.id) {
        this.item = item;
      }
    })

    const cart = JSON.parse(localStorage.getItem('cart'));
    for(let x = 0; x < cart.length; x++) {
      if(cart[x].itemID === this.item.id) {
        this.inCart = true;
      }
    }
  }
}
</script>