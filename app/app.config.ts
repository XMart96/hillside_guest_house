export default defineAppConfig({
    ui: {
        colors: {
            primary: 'h-green',
            neutral: 'h-light-gray',
        },
        breadcrumb: {
            slots: {
                separatorIcon: 'text-white',
            },
            variants: {
                active: {
                    false: {
                        link: 'text-white',
                    },
                },
            },
        },
        pageSection: {
            slots: {
                container: 'py-10 sm:py-16 lg:py-20',
            },
        },
        blogPost: {
            slots: {
                image: 'object-center',
            },
        },
    },
});
