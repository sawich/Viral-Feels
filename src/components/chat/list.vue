<script setup lang="ts">
import { rand } from '@vueuse/shared'
import { subMinutes } from 'date-fns'

function createChat({ name }: { name: string }) {
  return {
    uuid: createUuid(),
    model: 'ever-sime-gumi-dimi-v2-random-number-2123',
    date: subMinutes(new Date(), rand(1, 59)),
    name,
    text: 'Lorem ipsum makes anime when drunk',
  }
}

const chats = [
  createChat({ name: 'Yuuko Kanoe' }),
  createChat({ name: 'Asuna Yuki' }),
  createChat({ name: 'Yuki Konno' }),
]
</script>

<template>
  <section class="flex flex-col gap-2">
    <ChatListItem
      v-for="{ uuid, text, model, date, name } of chats" :key="uuid"
      :uuid="uuid"
      :text="text"
      :model="model"
      :date="date"
      :name="name"
    />
  </section>
</template>
