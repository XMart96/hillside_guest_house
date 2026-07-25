<script setup lang="ts">
import { en, ru, hy } from '@nuxt/ui/locale';
const myLocales = { en, ru, hy };
const { locale } = useI18n();
</script>

<template>
    <UApp :locale="myLocales[locale]">
        <Header />
        <UMain>
            <slot />
        </UMain>
        <Footer />
    </UApp>
</template>
