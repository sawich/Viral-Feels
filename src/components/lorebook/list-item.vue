<script setup lang="ts">
interface Props {
  name: string
  content: ReadonlyArray<unknown>
}

defineProps<Props>()
</script>

<template>
  <button type="button">
    <header>{{ name }}</header>
    <summary>({{ content.length }})</summary>
  </button>
</template>
