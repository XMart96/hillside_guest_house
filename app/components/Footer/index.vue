<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui';
const { links } = useNavigation();
const { rooms } = useRooms();
const { services } = useServices();
const { news } = useNews();
const { t } = useI18n();
const localePath = useLocalePath();

const columns = computed<FooterColumn[]>(() => [
    {
        label: t('footer.links'),
        children: links.value as FooterColumn['children'],
    },
    {
        label: t('footer.rooms'),
        children: rooms.value.map((room) => ({
            label: room.name,
            to: localePath(`/rooms/${room.slug}`),
        })),
    },
    {
        label: t('footer.services'),
        children: services.value.map((service) => ({
            label: service.name,
            to: localePath(`/services/${service.slug}`),
        })),
    },
    {
        label: t('footer.news'),
        children: news.value.map((news) => ({
            label: news.name,
            to: localePath(`/news/${news.slug}`),
        })),
    },
]);
</script>

<template>
    <UFooter class="bg-h-blue-950">
        <template #top>
            <UContainer>
                <UFooterColumns
                    :columns="columns"
                    :ui="{
                        label: 'text-white',
                    }"
                >
                    <template #left>
                        <FooterInfoBar />
                    </template>
                </UFooterColumns>
            </UContainer>
        </template>
        <template #left>
            <FooterRights />
        </template>
        <template #right>
            <SocialInfo />
        </template>
    </UFooter>
</template>
