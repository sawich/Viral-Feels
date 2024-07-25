<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns'

import Icon from '~icons/material-symbols/shoppingmode'

interface Props { uuid: string, name: string, text: string, model: string, date: Date }
const props = defineProps<Props>()

const route = useRoute()
const state = computed(() => props.uuid === route.params.chat)
</script>

<template>
  <!-- :class="{ 'rounded-2xl bg-neutral-900/5': state }" -->
  <RouterLink
    :to="{ name: 'talk', params: { chat: uuid } }"
    class="rounded-2xl px-4 py-2 outline outline-1 transition-all"
    :class="{
      'cursor-not-allowed shadow-transparent outline-neutral-900': state,
      'outline-transparent': state === false,
    }"
  >
    <div class="flex items-center gap-2 ">
      <strong class="grow">
        {{ name }}
      </strong>

      <i :title="date.toLocaleString()">
        {{ formatDistanceToNow(date, { addSuffix: true }) }}
      </i>

      <Icon />
    </div>

    <div class="truncate opacity-60">
      {{ model }}
    </div>

    <div class="truncate">
      {{ text }}
    </div>
  </RouterLink>
</template>
