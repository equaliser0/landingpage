export default function () {
  const X = ref(0);
  const Y = ref(0);
  const { $useScroll } = useNuxtApp();
  if (typeof $useScroll === "function") {
    const { x, y } = $useScroll();
    watch(x, (value) => {
      X.value = value;
    });
    watch(y, (value) => {
      Y.value = value;
    });
		// the use of scrollX, and scrollY makes more sense than just x, and y
    return { scrollX: X, scrollY: Y };
  }
  // this return for when the plugin is not ready yet (ssr mode)
  return { scrollX: 0, scrollY: 0 };
}
