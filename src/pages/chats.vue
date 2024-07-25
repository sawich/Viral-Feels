<script setup lang="ts">
const route = useRoute()
const chat = computed(() => route.params.chat)
</script>

<template>
  <section class="flex gap-2">
    <ContentWrapper>
      <ChatList />
    </ContentWrapper>

    <ContentWrapper v-if="chat?.length > 0" class="grow">
      <ChatTalk />
    </ContentWrapper>
  </section>
</template>
