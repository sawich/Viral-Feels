<script setup lang="ts">
import { useUserSettings } from '@/composables/use/user-settings'
import { ChatListTime } from '@/composables/use/user-settings/chat-variant'

const settings = useUserSettings()

const options = [{
  name: 'Distance',
  token: ChatListTime.Distance,
}, {
  name: 'Strict',
  token: ChatListTime.Strict,
}]
</script>

<template>
  <ContentWrapper>
    <SettingsFolders />

    <section>
      <span>
        lastChatUsageFormat:
      </span>

      <span class="space-x-2">
        <button
          v-for="{ name, token } of options" :key="token"
          type="button"
          :disabled="settings.lastChatUsageFormat === token"
          :class="{ 'cursor-not-allowed': settings.lastChatUsageFormat === token }"
          @click="settings.lastChatUsageFormat = token"
        >
          {{ name }}
        </button>
      </span>
    </section>

    <section>
      showModelInChatList:
      <button type="button" @click="settings.showModelInChatList = !settings.showModelInChatList">
        {{ String(settings.showModelInChatList) }}
      </button>
    </section>
  </ContentWrapper>
</template>
