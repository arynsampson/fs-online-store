<template>
  <Navbar />
    <div class="lookbook">
      <div class="main-container">
        <p><img :src="item.image" :alt="carMake"></p>
        <p>{{ item.carMake }} {{ item.carModel }}</p>
        <p>R{{ item.price }}</p>
        <button v-if="!inCart" @click="addToCart">Add to cart</button>
        <p v-else>Item is in cart</p>
      </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
import { onMounted, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  setup() {

    const item = reactive({});
    const inCart = ref(false);
    const route = useRoute();
    const msg = ref('');

    onMounted(() => {
      const cars = JSON.parse(localStorage.getItem('cars'));
        for(let x = 0; x < cars.length; x++) {
          if(cars[x].id == route.params.id) {
            item.value = cars[x];
          }
        }

      const cart = JSON.parse(localStorage.getItem('cart'));
        for(let x = 0; x < cart.length; x++) {
          if(cart[x].id == item.id) {
            inCart.value = true;
          }
        }
    });

    const addToCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart'));
      cart.push({
        id: item.id,
        carMake: item.carMake,
        carModel: item.carModel,
        price: item.price,
        image: item.image,
        quantity: 1
      });
      inCart.value = true;
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`You have added: ${item.value.carMake} ${item.value.carModel} to your cart.`);
    }

    return {
      item,
      inCart,
      msg,
      addToCart
    }
  }
}
</script>