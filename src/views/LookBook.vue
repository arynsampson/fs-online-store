<template>
  <Navbar />
    <div class="lookbook">
      <div class="main-container">
        <p><img :src="item.item_image" alt=""></p>
        <p>{{ item.item_name }}</p>
        <p>{{ item.item_price }}</p>
        
        <button @click="addToCart">Add to cart</button>
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
  methods: {
    addToCart() {
      const cart = JSON.parse(localStorage.getItem('cart'));
      if(cart.length === 0 ) {
        const cartItem = {
          itemID: this.item.id,
          itemName: this.item.item_name,
          itemPrice: this.item.item_price,
          itemImage: this.item.item_image,
          quantity: 1
        }
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        cart.forEach((item) => {
          if(this.item.id == item.itemID) {
          alert('You have already added this item. Open your cart to update the item quantity.');
          return;
        } else {
          const cartItem = {
          itemID: this.item.id,
          itemName: this.item.item_name,
          itemPrice: this.item.item_price,
          itemImage: this.item.item_image,
          quantity: 1
        }
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
        }
        })
      }
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