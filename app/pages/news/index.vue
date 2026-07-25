<script setup lang="ts">
const { t } = useI18n();
useSeoMeta({
    title: t('seo.news.title'),
});

const { news } = useNews();

import type { FormError, FormSubmitEvent } from '@nuxt/ui';

const state = reactive({
    email: undefined,
});

type Schema = typeof state;

function validate(state: Partial<Schema>): FormError[] {
    const errors = [];
    if (!state.email) errors.push({ name: 'email', message: 'Required' });
    return errors;
}

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({
        title: 'Success',
        description: 'The form has been submitted.',
        color: 'success',
    });
    console.log(event.data);
}
</script>

<template>
    <div>
        <BreadcrumbSection
            bgImg="/images/contacts_bg.jpg"
            class="h-50 md:h-75"
        />
        <UPageSection>
            <div class="flex flex-col lg:flex-row gap-10">
                <div class="space-y-5 sm:space-y-7.5 lg:space-y-10 flex-1">
                    <UBlogPost
                        v-for="post in [...news].reverse()"
                        :key="post.id"
                        :title="post.name"
                        :description="post.description"
                        :image="`/${post.image_path}/${post.images[0]}`"
                        :date="post.date"
                        :to="$localePath(`/news/${post.slug}`)"
                        orientation="horizontal"
                        variant="outline"
                        class="shadow-lg"
                    />
                </div>
                <div
                    class="p-7.5 rounded-md ring ring-default shadow-lg h-fit max-w-90 space-y-2.5"
                >
                    <h2>{{ $t('newsletter.title') }}</h2>
                    <p>
                        {{ $t('newsletter.description') }}
                    </p>
                    <UForm
                        :validate="validate"
                        :state="state"
                        class="space-y-4"
                        @submit="onSubmit"
                    >
                        <UFormField label="Email" name="email">
                            <UInput
                                v-model="state.email"
                                :placeholder="$t('newsletter.placeholder')"
                                class="w-full"
                            />
                        </UFormField>

                        <UButton
                            type="submit"
                            :label="$t('newsletter.button')"
                        />
                    </UForm>
                </div>
            </div>
            <PageBanner />
        </UPageSection>
    </div>
</template>
