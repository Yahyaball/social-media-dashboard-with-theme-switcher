import { useBreakpoints } from "@vueuse/core";

export function useBreakpoint() {
  const breakpoints = useBreakpoints({
    mobile: 375,
    tablet: 768,
    desktop: 1024,
  });
  return { breakpoints };
}
