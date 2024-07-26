<script setup lang="ts">
import { useContentFolders } from '@/composables/use/content/folders'

import FolderIcon from '~icons/material-symbols/folder'
import OpenFolderIcon from '~icons/material-symbols/folder-open'

const folders = useContentFolders()
</script>

<template>
  <SidebarCollection :collection="folders">
    <template #default="{ uuid, name }">
      <SidebarStatesToggle :to="{ name: 'chats', params: { folder: uuid } }">
        <template #default="{ state }">
          <SidebarItem>
            <template #header>
              <span class="break-all" style="word-break: break-all">
                {{ name }}
              </span>
            </template>

            <template #body>
              <FolderIcon v-show="state === false" />
              <OpenFolderIcon v-show="state === true" />
            </template>
          </SidebarItem>
        </template>
      </SidebarStatesToggle>
    </template>
  </SidebarCollection>
</template>
