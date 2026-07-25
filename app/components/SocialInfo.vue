<script setup lang="ts">
const { data } = useData();

const socials = [
    { icon: 'i-simple-icons-telegram', url: data.value.telegram },
    { icon: 'i-simple-icons-whatsapp', url: data.value.whatsApp },
    { icon: 'i-simple-icons-instagram', url: data.value.instagram },
    { icon: 'i-simple-icons-facebook', url: data.value.facebook },
];
</script>

<template>
    <div class="flex items-center gap-3">
        <ContactLink
            v-for="(social, index) in socials"
            :key="index"
            :icon="social.icon"
            :url="social.url"
        />
    </div>
</template>
