<script setup lang="ts">
const props = defineProps({
  needsPadding: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <div
    class="shadow border border-gray-400 rounded-xl bg-white overflow-hidden w-fit h-fit"
    :class="{ 'p-5': needsPadding }"
  >
    <slot />
  </div>
</template>
