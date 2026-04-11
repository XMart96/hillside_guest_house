<script setup>
const { t } = useI18n();
useSeoMeta({
    title: t('seo.rooms.title'),
});
</script>

<template>
    <UContainer>
        <h1>{{ $t('navigation.rooms') }}</h1>
    </UContainer>
</template>
