<script setup lang="ts">
const links = [{
  uuid: 'cards',
  name: 'cards',
  icon: defineAsyncComponent(() => import('~icons/material-symbols/playing-cards')),
}, {
  uuid: 'lorebooks',
  name: 'lorebooks',
  icon: defineAsyncComponent(() => import('~icons/material-symbols/book-2')),
}, {
  uuid: 'settings',
  name: 'settings',
  icon: defineAsyncComponent(() => import('~icons/material-symbols/settings-heart')),
}] as const
</script>

<template>
  <SidebarCollection :collection="links">
    <template #default="{ name, icon }">
      <SidebarAppState :to="{ name }">
        <template #default="{ state }">
          <SidebarItem :state="state">
            <template #header>
              {{ name }}
            </template>

            <template #body>
              <Component :is="icon" />
            </template>
          </SidebarItem>
        </template>
      </SidebarAppState>
    </template>
  </SidebarCollection>
</template>
