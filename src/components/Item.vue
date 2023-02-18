<template>
    <div class="item-wrapper">
        <img :src="image" alt="item-img" class="item-card-img">
        <div class="item-card-info-wrapper">
            <router-link :to="{ name: 'lookbook', params: { id: uid } }">{{ name }}</router-link>
            <p class="item-card-price">R {{ price }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['uid', 'image', 'name', 'price']);

</script>