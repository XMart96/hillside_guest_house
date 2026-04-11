<script setup>
const { t } = useI18n();
useSeoMeta({
    title: t('seo.news.title'),
});
</script>

<template>
    <UContainer>
        <h1>{{ $t('navigation.news') }}</h1>
    </UContainer>
</template>
