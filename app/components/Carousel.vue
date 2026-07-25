<script setup lang="ts">
const items = [
    '/images/slides/1.jpg',
    '/images/slides/2.jpg',
    '/images/slides/3.jpg',
    '/images/slides/4.jpg',
    '/images/slides/5.jpg',
    '/images/slides/6.jpg',
];

useHead({
    link: [
        {
            rel: 'preload',
            as: 'image',
            href: items[0],
        },
    ],
});
</script>

<template>
    <UCarousel
        loop
        v-slot="{ item, index }"
        :items="items"
        :autoplay="{ delay: 8000 }"
    >
        <NuxtImg
            :src="item"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : 'auto'"
            :preload="index === 0"
            format="webp"
            class="w-full h-125 lg:h-175 object-cover"
        />
    </UCarousel>
</template>
