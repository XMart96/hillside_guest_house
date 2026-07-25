<script setup lang="ts">
const { t } = useI18n();
useSeoMeta({
    title: t('seo.news.title'),
});

const route = useRoute();
const { news } = useNews();

const post = computed(() =>
    news.value.find((r) => r.slug === route.params.news),
);
</script>

<template>
    <div>
        <BreadcrumbSection
            bgImg="/images/contacts_bg.jpg"
            class="h-50 md:h-75"
        />
        <UContainer>
            <pre>{{ post }}</pre>
        </UContainer>
    </div>
</template>
