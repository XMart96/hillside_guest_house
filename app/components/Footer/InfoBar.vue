<script setup lang="ts">
const { data } = useData();
</script>

<template>
    <div class="flex flex-col gap-3">
        <LogoText />
        <ULink :to="`tel:${data.phone}`" class="text-2xl text-primary-500">
            {{ formatPhone(data.phone) }}
        </ULink>
        <ULink :to="`mailto:${data.email}`" class="text-muted">
            {{ data.email }}
        </ULink>
        <ULink :to="$localePath('/contacts')" class="text-muted">
            {{ $t('contact.addressText') }}
        </ULink>
    </div>
</template>
