<script setup>
const { t } = useI18n();
useSeoMeta({
    title: t('seo.about.title'),
});
</script>

<template>
    <UContainer>
        <h1>{{ $t('navigation.about') }}</h1>
    </UContainer>
</template>
