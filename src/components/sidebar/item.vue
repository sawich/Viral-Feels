<script setup lang="ts">
import { useProvideSidebarState, useSidebarState } from '@/composables/use/sidebar-state'

const x = useSidebarState()
if (!x) {
  throw new Error(`Call ${useProvideSidebarState.name} before use ${useSidebarState.name}`)
}

const { state } = x
</script>

<template>
  <section
    class="flex flex-col gap-1"
    :class="{
      'cursor-not-allowed text-white': state,
      'text-white/50 transition hover:text-white': state === false,
    }"
  >
    <div class="flex place-content-center text-2xl">
      <slot name="body" />
    </div>

    <div class="text-center text-sm">
      <slot name="header" />
    </div>
  </section>
</template>
