export const useData = () => {
    const data = computed(() => ({
        phone: '+37444290127',
        email: 'info@hillside.am',
        time: '09:00 ֊ 21:00',
        instagram: 'https://www.instagram.com/hillside.guest.house/',
        facebook: 'https://www.facebook.com/profile.php?id=61573435455006',
        telegram: 'https://t.me/hillside_guest_house',
        whatsApp: 'https://wa.me/37444290127',
        video: 'https://www.youtube.com/embed/W18K8XkTqz0?si=i1BxDHDJExX9IZlp',
    }));

    return { data };
};
