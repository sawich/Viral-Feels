<script setup lang="ts">
interface Props { state: boolean }
defineProps<Props>()
</script>

<template>
  <section
    class="flex flex-col gap-1"
    :class="{ 'cursor-not-allowed text-white': state, 'text-white/50 transition hover:text-white': state === false }"
  >
    <div class="flex place-content-center text-2xl">
      <slot name="body" />
    </div>

    <div class="text-center text-sm">
      <slot name="header" />
    </div>
  </section>
</template>
