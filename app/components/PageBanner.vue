<script setup lang="ts">
const { data } = useData();

const socials = [
    {
        icon: 'i-simple-icons-telegram',
        url: data.value.telegram,
        label: 'Telegram',
    },
    {
        icon: 'i-simple-icons-whatsapp',
        url: data.value.whatsApp,
        label: 'WhatsApp',
    },
];
</script>

<template>
    <div class="relative w-full overflow-hidden rounded-md shadow-lg">
        <video
            class="absolute inset-0 w-full h-full object-cover"
            src="/images/banner.mp4"
            autoplay
            loop
            muted
            playsinline
        />
        <div class="absolute inset-0 bg-black/40"></div>

        <div
            class="relative z-10 h-full flex flex-col lg:flex-row items-center p-7.5 gap-5"
        >
            <div class="text-white flex-1 space-y-2">
                <h2 class="text-4xl font-bold">{{ $t('banner.title') }}</h2>
                <p class="text-lg">
                    {{ $t('banner.description') }}
                </p>
            </div>
            <div class="space-x-2">
                <UButton
                    v-for="(social, index) in socials"
                    variant="solid"
                    :key="index"
                    :icon="social.icon"
                    size="lg"
                    :to="social.url"
                    target="_blank"
                    :label="social.label"
                />
            </div>
        </div>
    </div>
</template>
