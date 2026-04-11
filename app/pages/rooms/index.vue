<script setup>
const { t } = useI18n();
useSeoMeta({
    title: t('seo.rooms.title'),
});
const { rooms } = useRooms();
</script>

<template>
    <UContainer>
        <h1>{{ $t('navigation.rooms') }}</h1>
        <ULink v-for="room in rooms" :to="$localePath(`/rooms/${room.slug}`)">
            {{ room.name }}
        </ULink>
    </UContainer>
</template>
