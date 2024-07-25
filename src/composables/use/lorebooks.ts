export const useLorebooks = createSharedComposable(() => {
  const values = reactive(new Map<string, {
    name: string
    content: ReadonlyArray<{
      header: ReadonlyArray<string>
      text: string
    }>
  }>())

  return values
})
