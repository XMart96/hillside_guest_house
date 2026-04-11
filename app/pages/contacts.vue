<script setup>
const { t } = useI18n();
useSeoMeta({
    title: t('seo.contacts.title'),
});
</script>

<template>
    <UContainer>
        <h1>{{ $t('navigation.contacts') }}</h1>
    </UContainer>
</template>
