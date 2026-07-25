<script setup lang="ts">
const { links } = useNavigation();
</script>

<template>
    <HeaderTopBar />
    <UHeader mode="slideover">
        <template #left>
            <LogoText />
        </template>
        <UNavigationMenu
            :items="links"
            variant="link"
            :ui="{
                link: 'px-1 xl:px-2.5',
            }"
        />
        <template #right>
            <UColorModeButton class="hidden sm:flex" />
            <HeaderLocaleSelect />
        </template>
        <template #body>
            <UNavigationMenu
                :items="links"
                variant="link"
                orientation="vertical"
            />
            <UColorModeButton class="sm:hidden" />
        </template>
    </UHeader>
</template>
