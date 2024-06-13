<script setup lang="ts">
const isDark = ref(false as boolean);
</script>
<template>
  <div class="w-screen h-screen flex flex-col" :class="{ dark: isDark }">
    <UiHeader
      @on-dark-mode-changed="
        (newDarkValue) => {
          isDark = newDarkValue;
        }
      "
    />
    <div class="w-full h-full overflow-auto flex-1">
      <slot />
      <UiFooter />
    </div>
  </div>
</template>
