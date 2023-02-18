<template>
    <div class="item-wrapper">
        <img :src="image" alt="item-img" class="item-card-img">
        <div class="item-card-info-wrapper">
            <a href="#" class="item-card-name">{{ name }}</a>
            <p class="item-card-price">R {{ price }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['image', 'name', 'price']);

</script>