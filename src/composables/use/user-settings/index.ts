import { ChatListTime } from './chat-variant'

export const useUserSettings = createGlobalState(() => useLocalStorage(
  'user-settings',
  {
    lastChatUsageFormat: ChatListTime.Distance,

    // double left mouse clit on message for enable editing
    fastMessageEditing: false,

    showModelInChatList: false
  },
),
)
