<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns'
import { useUserSettings } from '@/composables/use/user-settings'
import { ChatListTime } from '@/composables/use/user-settings/chat-variant'

import PinnedIcon from '~icons/material-symbols/push-pin'
import PinIcon from '~icons/material-symbols/push-pin-outline'

interface Props {
  uuid: string
  name: string
  text: string
  model: string
  date: Date
  pinned: boolean
}

const props = defineProps<Props>()
const pinned = defineModel('pinned', { type: Boolean, required: true })

const route = useRoute()
const state = computed(() => props.uuid === route.params.chat)

const settings = useUserSettings()
</script>

<template>
  <RouterLink
    :to="{ name: 'talk', params: { chat: uuid } }"
    class="block rounded-2xl border p-2 shadow-md transition"
    :class="{
      'cursor-not-allowed border-neutral-900': state,
      'border-transparent shadow-transparent hover:border-neutral-900/50': state === false,
    }"
  >
    <div class="flex items-center gap-2 text-nowrap">
      <strong class="grow truncate">
        {{ name }}
      </strong>

      <i class="opacity-80">
        <span v-if="settings.lastChatUsageFormat === ChatListTime.Distance" :title="date.toLocaleString()">
          {{ formatDistanceToNow(date, { addSuffix: true }) }}
        </span>

        <span v-else-if="settings.lastChatUsageFormat === ChatListTime.Strict" :title="formatDistanceToNow(date, { addSuffix: true })">
          {{ date.toLocaleString() }}
        </span>
      </i>

      <!-- prevent resizing -->
      <button type="button" class="opacity-40 transition hover:opacity-100" @click="() => pinned = !pinned">
        <PinnedIcon v-if="pinned" />
        <PinIcon v-else />
      </button>
    </div>

    <div v-if="settings.showModelInChatList" class="truncate opacity-60">
      {{ model }}
    </div>

    <div class="truncate opacity-80">
      {{ text }}
    </div>
  </RouterLink>
</template>
