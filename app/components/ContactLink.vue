<script setup lang="ts">
defineProps<{
    icon: string;
    url: string;
    label?: string;
}>();
</script>

<template>
    <ULink :to="url" target="_blank" class="flex items-center gap-2">
        <UIcon class="text-primary-500" :name="icon" />
        <span
            class="hidden sm:block text-white hover:text-primary-500 transition-colors text-sm"
        >
            {{ label }}
        </span>
    </ULink>
</template>
