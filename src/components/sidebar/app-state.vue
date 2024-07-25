<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router'

type Props = RouterLinkProps & { to: { name: string } }

const props = defineProps<Props>()

const route = useRoute()
const state = computed(() => props.to.name === route.name)
</script>

<template>
  <RouterLink v-bind="$props">
    <slot :state="state" />
  </RouterLink>
</template>
