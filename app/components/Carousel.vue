<script setup lang="ts">
const items = [
    '/images/slides/1.jpg',
    '/images/slides/2.jpg',
    '/images/slides/3.jpg',
    '/images/slides/4.jpg',
    '/images/slides/5.jpg',
    '/images/slides/6.jpg',
];
</script>

<template>
    <UCarousel
        loop
        v-slot="{ item }"
        :items="items"
        :autoplay="{ delay: 8000 }"
    >
        <NuxtImg
            :src="item"
            loading="lazy"
            format="webp"
            class="w-full h-125 lg:h-175 object-cover"
        />
    </UCarousel>
</template>
