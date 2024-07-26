<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router'

import { useProvideSidebarState } from '@/composables/use/sidebar-state'

type Props = RouterLinkProps & { to: { params: { folder: string } } }

const props = defineProps<Props>()

const route = useRoute()

const { state } = useProvideSidebarState(computed(() => props.to.params.folder === route.params.folder))
</script>

<template>
  <RouterLink v-bind="$props">
    <slot :state="state" />
  </RouterLink>
</template>
