export function useImageUrl() {
  const getImageUrl = (path: string) => {
    const filename = path.split("/").pop() || "";
    return new URL(`../assets/icon-${filename}.svg`, import.meta.url).href;
  };
  return { getImageUrl };
}
