import type { MaybeRefOrGetter } from 'vue'

export function createLorebookHeaderItem({ text }: { text: MaybeRefOrGetter<string> }) {
  return {
    uuid: createUuid(),
    text: toValue(text),
  }
}
