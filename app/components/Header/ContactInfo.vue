<script setup lang="ts">
const { data } = useData();
</script>

<template>
    <div class="flex items-center gap-3">
        <ContactLink
            icon="i-lucide-phone"
            :url="`tel:${data.phone}`"
            :label="formatPhone(data.phone)"
        />
        <ContactLink
            icon="i-lucide-mail"
            :url="`mailto:${data.email}`"
            :label="data.email"
        />
    </div>
</template>
