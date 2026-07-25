<script setup>
const { t } = useI18n();
useSeoMeta({
    title: t('seo.services.title'),
});

const { services } = useServices();
</script>

<template>
    <UContainer>
        <pre>{{ services }}</pre>
    </UContainer>
</template>
