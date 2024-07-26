<script setup lang="ts">
import { faker } from '@faker-js/faker'

const route = useRoute()

// const folder = computed(() => route.params.folder)
const chat = computed(() => route.params.chat)
const request = ref('')

const lines = ref([] as { uuid: string, text: string }[])

watch(chat, () => {
  lines.value = faker.lorem
    .lines(faker.number.int(25))
    .split('\n')
    .map(e => ({ uuid: createUuid(), text: e }))
}, {
  immediate: true,
})
</script>

<template>
  <section class="flex flex-col justify-between gap-2 overflow-hidden">
    <div class="flex grow flex-col gap-2 overflow-y-auto p-2">
      <template v-for="line of lines" :key="line.uuid">
        <ContentWrapper class="w-fit">
          {{ line.text }}
        </ContentWrapper>
      </template>
    </div>

    <textarea
      v-model="request"
      class="block h-24 w-full resize-x rounded-2xl border-neutral-900 p-2 focus:outline-none"
    />
  </section>
</template>
