import type { Folder } from './types/folder'

export const useContentFolders = createGlobalState(() => useLocalStorage<Folder[]>('folders', []))
