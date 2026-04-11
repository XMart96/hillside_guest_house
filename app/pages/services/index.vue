<script setup>
const { t } = useI18n();
useSeoMeta({
    title: t('seo.services.title'),
});
</script>

<template>
    <UContainer>
        <h1>{{ $t('navigation.services') }}</h1>
    </UContainer>
</template>
