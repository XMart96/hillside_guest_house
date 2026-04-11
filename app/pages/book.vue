<script setup>
const { t } = useI18n();
useSeoMeta({
    title: t('seo.book.title'),
});
</script>

<template>
    <UContainer>
        <h1>{{ $t('navigation.book') }}</h1>
    </UContainer>
</template>
