import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

export const useBreakpointSize = () => {
    const breakpoints = useBreakpoints(breakpointsTailwind);

    const size = computed(() => {
        if (breakpoints.greaterOrEqual('xl').value) return 'xl';
        if (breakpoints.greaterOrEqual('lg').value) return 'lg';
        if (breakpoints.greaterOrEqual('md').value) return 'md';
        if (breakpoints.greaterOrEqual('sm').value) return 'sm';
        return 'xs';
    });

    return { size, breakpoints };
};
