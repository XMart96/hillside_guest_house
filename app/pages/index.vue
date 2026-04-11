<script setup lang="ts">
const { t } = useI18n();
useSeoMeta({
    title: t('seo.home.title'),
});
</script>

<template>
    <Carousel />
</template>
