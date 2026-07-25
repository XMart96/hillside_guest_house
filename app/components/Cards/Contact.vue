<script setup lang="ts">
defineProps<{
    item: string;
}>();
</script>

<template>
    <div class="text-center">
        <UIcon class="text-primary-500 size-8" :name="item.icon" />
        <h3>{{ item.title }}</h3>
        <ULink class="text-sm" v-if="item.href" :to="item.href">
            {{ item.label }}
        </ULink>
        <p v-else class="text-sm">{{ item.label }}</p>
    </div>
</template>
