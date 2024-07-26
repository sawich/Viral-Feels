<script setup lang="ts">
import { faker } from '@faker-js/faker'
import { groupBy } from 'lodash-es'

function createChat() {
  return {
    uuid: createUuid(),
    model: 'ever-sime-gumi-dimi-v2-random-number-2123',
    date: faker.date.past(),
    name: faker.person.fullName(),
    text: faker.hacker.phrase(),
    pinned: faker.datatype.boolean(),
  }
}

const chats = reactive(Array.from({ length: faker.number.int({ min: 10, max: 25 }) }).map(() => createChat()))
function*get() {
  const values = groupBy(chats, e => e.pinned)

  yield ['true', values.true] as const
  yield ['false', values.false] as const
}
</script>

<template>
  <section class="space-y-2 overflow-y-auto">
    <template v-for="[group, values] of get()" :key="group">
      <ChatListItem
        v-for="chat of values.sort((y, x) => Number(x.date) - Number(y.date))" :key="chat.uuid"
        v-model:pinned="chat.pinned"
        :uuid="chat.uuid"
        :text="chat.text"
        :model="chat.model"
        :date="chat.date"
        :name="chat.name"
      />
    </template>
  </section>
</template>
