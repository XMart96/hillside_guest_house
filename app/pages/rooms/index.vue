<script setup>
const { t } = useI18n();
useSeoMeta({
    title: t('seo.rooms.title'),
});
const { rooms } = useRooms();
</script>

<template>
    <div>
        <BreadcrumbSection
            bgImg="/images/contacts_bg.jpg"
            class="h-50 md:h-75"
        />
        <UPageSection>
            <div class="flex flex-col lg:flex-row gap-10">
                <div class="space-y-5 sm:space-y-7.5 lg:space-y-10 flex-1">
                    <UPageCTA
                        v-for="room in rooms"
                        :key="room.id"
                        :title="room.name"
                        :description="room.description"
                        :links="[
                            {
                                label: 'Learn more',
                                variant: 'solid',
                                trailingIcon: 'i-lucide-arrow-right',
                                to: $localePath(`/rooms/${room.slug}`),
                            },
                        ]"
                        orientation="horizontal"
                        :reverse="room.id % 2 === 0"
                        class="shadow-lg"
                    >
                        <NuxtImg
                            format="webp"
                            :src="`/${room.image_path}/${room.images[0]}`"
                            :alt="room.name"
                            class="w-full"
                            loading="lazy"
                        />
                    </UPageCTA>
                </div>
                <div
                    class="p-7.5 rounded-md ring ring-default shadow-lg h-fit max-w-90 space-y-2.5"
                >
                    <h2>Newsletter</h2>
                    <p>
                        Subscribe our newsletter gor get notification new
                        updates.
                    </p>
                </div>
            </div>
            <PageBanner />
        </UPageSection>
    </div>
</template>
