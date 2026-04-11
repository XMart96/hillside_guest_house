<script setup lang="ts">
import * as allLocales from '@nuxt/ui/locale';
const { locale, setLocale, locales } = useI18n();

const myLocales = computed(() =>
    locales.value.map((l) => allLocales[l.code]).filter(Boolean),
);
const { size } = useBreakpointSize();

const handleLocale = (locale: string) => {
    setLocale(locale as 'en' | 'ru' | 'hy');
};
</script>

<template>
    <ClientOnly>
        <ULocaleSelect
            :size="size === 'xs' ? 'sm' : 'md'"
            :model-value="locale"
            :locales="myLocales"
            @update:model-value="handleLocale"
        />
    </ClientOnly>
</template>
