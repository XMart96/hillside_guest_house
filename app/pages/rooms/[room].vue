<script setup>
const { t } = useI18n();
useSeoMeta({
    title: t('seo.rooms.title'),
});

const route = useRoute();
const { rooms } = useRooms();

const room = computed(() =>
    rooms.value.find((r) => r.slug === route.params.room),
);
</script>

<template>
    <div>
        <BreadcrumbSection
            bgImg="/images/contacts_bg.jpg"
            class="h-50 md:h-75"
        />
        <UContainer>
            <pre>{{ room }}</pre>
        </UContainer>
    </div>
</template>
