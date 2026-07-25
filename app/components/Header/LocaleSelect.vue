<script setup lang="ts">
import { en, ru, hy } from '@nuxt/ui/locale';
const myLocales = [en, ru, hy];
const { locale, setLocale } = useI18n();

const { size } = useBreakpointSize();
</script>

<template>
    <ClientOnly>
        <ULocaleSelect
            :size="size === 'xs' ? 'sm' : 'md'"
            :model-value="locale"
            :locales="myLocales"
            @update:model-value="setLocale($event as 'en' | 'ru' | 'hy')"
        />
    </ClientOnly>
</template>
