<script setup lang="ts">
const items = [
    'https://picsum.photos/640/640?random=1',
    'https://picsum.photos/640/640?random=2',
    'https://picsum.photos/640/640?random=3',
    'https://picsum.photos/640/640?random=4',
    'https://picsum.photos/640/640?random=5',
    'https://picsum.photos/640/640?random=6',
];
</script>

<template>
    <UCarousel loop v-slot="{ item }" :items="items">
        <NuxtImg
            :src="item"
            loading="lazy"
            class="w-full h-[600px] object-cover"
        />
    </UCarousel>
</template>
