<script setup lang="ts">
const { data } = useData();
</script>

<template>
    <div class="flex items-center gap-3">
        <ContactLink icon="i-simple-icons-telegram" :url="data.telegram" />
        <ContactLink icon="i-simple-icons-whatsapp" :url="data.whatsApp" />
        <ContactLink icon="i-simple-icons-instagram" :url="data.instagram" />
        <ContactLink icon="i-simple-icons-facebook" :url="data.facebook" />
    </div>
</template>
