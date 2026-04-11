<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui';
const { items } = useNavigation();
const { rooms } = useRooms();
const { news } = useNews();
const { t } = useI18n();
const localePath = useLocalePath();

const columns = computed<FooterColumn[]>(() => [
    {
        label: t('footer.links'),
        children: items.value as FooterColumn['children'],
    },
    {
        label: t('footer.rooms'),
        children: rooms.value.map((room) => ({
            label: room.name,
            to: localePath(`/rooms/${room.slug}`),
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
