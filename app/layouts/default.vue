<script setup lang="ts">
import * as allLocales from '@nuxt/ui/locale';

const { locale } = useI18n();
</script>

<template>
    <UApp :locale="allLocales[locale]">
        <Header />
        <UMain>
            <slot />
        </UMain>
        <Footer />
    </UApp>
</template>
