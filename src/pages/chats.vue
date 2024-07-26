<script setup lang="ts">
import LeftIcon from '~icons/material-symbols/chevron-left'
</script>

<template>
  <section class="grid grid-cols-[1fr_3fr] gap-2">
    <ContentWrapper class="flex min-w-80 flex-col overflow-hidden">
      <div class="inline-flex justify-between">
        <button type="button" class="inline-flex place-items-center opacity-100 transition">
          <LeftIcon />

          <span>Chat list</span>
        </button>

        <button type="button" class="inline-flex place-items-center opacity-100 transition">
          <LeftIcon />

          <span>Folder settings</span>
        </button>

        <h1>chat settings</h1>
      </div>

      <ChatList />
    </ContentWrapper>

    <!-- <ContentWrapper class="grow"> -->
    <RouterView class="grow" />
    <!-- </ContentWrapper> -->
  </section>
</template>
