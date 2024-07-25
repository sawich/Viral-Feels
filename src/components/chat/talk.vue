<script setup lang="ts">
const route = useRoute()

const folder = computed(() => route.params.folder)
const chat = computed(() => route.params.chat)

const request = ref('')
</script>

<template>
  <section>
    <div>folder: {{ folder }}</div>
    <div>chat: {{ chat }}</div>

    <textarea
      v-model="request"
      rows="5"
      class="w-full rounded-2xl border-neutral-900 p-2 shadow-md focus:outline-none"
    />
  </section>
</template>
