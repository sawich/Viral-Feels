export const [useProvideSidebarState, useSidebarState] = createInjectionState((state: ComputedRef<boolean>) => {
  // const state = ref(false)
  return { state }
})
