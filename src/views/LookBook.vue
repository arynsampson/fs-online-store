<template>
  <Navbar />
    <div class="lookbook">
      <div class="main-container">
        <div>
        <img :src="item.value.image" :alt="item.value.carMake">
        </div>
        <div>
          <section>
            <h2>{{ item.value.carModelYear }} {{ item.value.carMake }} {{ item.value.carModel }}</h2>
            <p>R{{ item.value.price }}</p>
            <p>Colour: <span class="colour-block" :style="{background: item.value.colour}"></span>{{ item.value.colour }}</p>
          </section>
          <button v-if="!inCart" @click="addToCart">Add to cart</button>
          <p v-else>Item is in cart</p>
        </div>
      </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
import { onBeforeMount, ref, reactive } from 'vue'
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

    onBeforeMount(() => {
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
        id: item.value.id,
        carMake: item.value.carMake,
        carModel: item.value.carModel,
        price: item.value.price,
        image: item.value.image,
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

<style scoped>

.lookbook {
  height: 100vh;
}
  .main-container {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .main-container img {
    width: 500px;
    height: 200px;
  }
  .main-container div:last-child {
    text-align: left;
    width: 100%;
    height: 400px;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  section p {
    margin-top: 20px;
    font-size: 18px;
  }

  button {
    padding: 10px;
    width: 300px;
    background-color: coral;
    border-radius: 10px;
    color: #fff;
  }

@media (min-width:768px) {
  .main-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .main-container div:first-child {
    width: 50%;
  }
  .main-container div:last-child {
    width: 40%;
  }

}

</style>