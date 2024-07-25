<script setup lang="ts" generic="T extends ReadonlyArray<{ uuid: string }>">
interface Props { collection: T }
const props = defineProps<Props>()
</script>

<template>
  <nav>
    <ul class="flex flex-col gap-4">
      <li v-for="element of props.collection" :key="element.uuid">
        <slot v-bind="element" />
      </li>
    </ul>
  </nav>
</template>
