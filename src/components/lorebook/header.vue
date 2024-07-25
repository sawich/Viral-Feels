<script setup lang="ts">
import { createLorebookHeaderItem } from '@/utils/editor'

const values = defineModel({
  type: Array<{ uuid: string, text: string }>,
  required: true,
})

const model = ref('')

function add() {
  if (model.value.length <= 0) {
    // skip
    return
  }

  if (values.value.some(({ text }) => text === model.value)) {
    // already exists error
    return
  }

  values.value.push(createLorebookHeaderItem({ text: model }))
}
</script>

<template>
  <div>
    <ul>
      <li v-for="{ uuid, text } of values" :key="uuid">
        {{ text }}
      </li>
    </ul>
    <input v-model="model" type="text" @keydown.enter="() => add()">
  </div>
</template>
