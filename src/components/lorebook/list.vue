<script setup lang="ts">
import { useLorebooks } from '@/composables/use/lorebooks'

const selected = defineModel({ type: String, required: true })
const values = useLorebooks()
</script>

<template>
  <section>
    <div v-for="[uuid, { name, content }] of values" :key="uuid">
      <LorebookListItem :name="name" :content="content" @click="selected = uuid" />
    </div>
  </section>
</template>
