<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
<template>
  <div class="w-full flex flex-row justify-center">
    <div class="max-w-screen-lg w-full flex-col py-32 px-5">
      <div
        v-if="title"
        class="font-lato text-2xl font-semibold tracking-wider mb-3 w-full text-center"
      >
        {{ title }}
      </div>
      <slot />
    </div>
  </div>
</template>
