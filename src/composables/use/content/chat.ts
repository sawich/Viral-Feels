import type { Chat } from './types/chat'

export function useContentChat({ uuid }: { uuid: string }) {
  return useLocalStorage<Chat>(`chat-${uuid}`, () => ({
    uuid,
    name: '',

    model: '',
    pinned: false,

    createdAt: new Date(),
    updatedAt: new Date(),
  }))
}
