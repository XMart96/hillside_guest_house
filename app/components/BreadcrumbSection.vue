<script setup lang="ts">
const { breadcrumbs } = useNavigation();
defineProps<{
    bgImg: string;
    overlap?: boolean;
}>();
</script>

<template>
    <div
        class="w-full flex flex-col justify-center items-center bg-cover bg-center relative"
        :class="overlap ? 'pb-25' : ''"
        :style="{ backgroundImage: `url(${bgImg})` }"
    >
        <div class="absolute inset-0 bg-black/40"></div>

        <h1 class="text-3xl md:text-5xl text-white relative z-10 mb-2">
            {{ breadcrumbs[1]?.label }}
        </h1>
        <UBreadcrumb :items="breadcrumbs" class="relative z-10" />
    </div>
</template>
