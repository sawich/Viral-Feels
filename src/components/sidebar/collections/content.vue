<script setup lang="ts">
import FolderIcon from '~icons/material-symbols/folder'
import OpenFolderIcon from '~icons/material-symbols/folder-open'

const folders = Array.from({ length: 3 }).map((_, i) => ({
  uuid: createUuid(),
  name: `folder ${i}`,
}))
</script>

<template>
  <SidebarCollection :collection="folders">
    <template #default="{ uuid, name }">
      <SidebarToggleState :to="{ name: 'chats', params: { folder: uuid } }">
        <template #default="{ state }">
          <SidebarItem :state="state">
            <template #header>
              {{ name }}
            </template>

            <template #body>
              <FolderIcon v-show="state === false" />
              <OpenFolderIcon v-show="state === true" />
            </template>
          </SidebarItem>
        </template>
      </SidebarToggleState>
    </template>
  </SidebarCollection>
</template>
