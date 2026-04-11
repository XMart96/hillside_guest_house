<script setup lang="ts">
const { items } = useNavigation();
</script>

<template>
    <HeaderTopBar />
    <UHeader mode="slideover">
        <template #title>
            <LogoText />
        </template>
        <UNavigationMenu :items="items" variant="link" />
        <template #right>
            <UColorModeButton class="hidden sm:flex" />
            <HeaderLocaleSelect />
        </template>
        <template #body>
            <UNavigationMenu
                :items="items"
                variant="link"
                orientation="vertical"
            />
            <UColorModeButton class="sm:hidden" />
        </template>
    </UHeader>
</template>
