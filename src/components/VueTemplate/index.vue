<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: ''
})

const count = ref(0)
</script>

<template>
  <h1>{{ props.name }} {{ count }}</h1>
</template>

<style lang="less" scoped></style>
