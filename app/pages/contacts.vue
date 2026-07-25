<script setup lang="ts">
const { t } = useI18n();
const { data } = useData();

useSeoMeta({
    title: t('seo.contacts.title'),
});

const contactItems = [
    {
        icon: 'i-lucide-phone',
        title: t('contact.phone'),
        label: formatPhone(data.value.phone),
        href: `tel:${data.value.phone}`,
    },
    {
        icon: 'i-lucide-mail',
        title: t('contact.email'),
        label: data.value.email,
        href: `mailto:${data.value.email}`,
    },

    {
        icon: 'i-lucide-clock',
        title: t('contact.time'),
        label: data.value.time,
    },
    {
        icon: 'i-lucide-map-pin',
        title: t('contact.address'),
        label: t('contact.addressText'),
    },
];
</script>

<template>
    <div>
        <BreadcrumbSection
            bgImg="/images/contacts_bg.jpg"
            class="h-75 md:h-100"
            :overlap="true"
        />
        <UContainer class="relative z-10">
            <div
                class="bg-white w-full h-fit rounded-md -mt-25 shadow-lg p-7.5"
            >
                <div
                    class="grid grid-cols-2 md:grid-cols-4 justify-items-center mb-5 gap-4"
                >
                    <CardsContact
                        v-for="(item, index) in contactItems"
                        :key="index"
                        :item="item"
                    />
                </div>
                <div class="rounded-md overflow-hidden">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A89d901f7da2229b0130c46f8ddcfdbc604e4061c2e8e21701184fb924d2053b7&amp;source=constructor"
                        width="100%"
                        height="500"
                        frameborder="0"
                    ></iframe>
                </div>
            </div>
        </UContainer>
        <UPageSection>
            <PageBanner />
        </UPageSection>
    </div>
</template>
