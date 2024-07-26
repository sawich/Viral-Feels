<script setup lang="ts">
import { useContentFolders } from '@/composables/use/content/folders'

import type { Folder } from '@/composables/use/content/types/folder'

const folders = useContentFolders()

function createItem() {
  return {
    uuid: createUuid(),
    name: '',

    chatList: [],
  } satisfies Folder
}
// https://youtu.be/QBw1dUMc7Sc
</script>

<template>
  <section>
    <h1>Folders</h1>

    <ul>
      <li v-for="folder of folders" :key="folder.uuid">
        <input v-model="folder.name" type="text" class="rounded px-2 outline outline-1 outline-neutral-900/10 hover:outline-neutral-900/50 focus:outline-neutral-900">
      </li>

      <button type="button" @click="folders.push(createItem())">
        add
      </button>
    </ul>
  </section>
</template>
