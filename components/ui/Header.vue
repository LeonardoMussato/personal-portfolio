<script setup lang="ts">
const emit = defineEmits(["onDarkModeChanged"]);
</script>
<template>
  <div
    class="w-full flex flex-row justify-between items-center px-5 py-4 from-blue-900 to-purple-700 bg-gradient-to-r"
  >
    <div class="font-bold text-white font-pixels text-xl">Leonardo Mussato</div>
    <UiNavigationMobileMenu
      @on-dark-mode-changed="(value) => emit('onDarkModeChanged', value)"
    />
    <div class="flex-row w-fit items-center gap-3 hidden md:flex">
      <UiNavigationMenu />
      <ButtonsDarkMode
        @on-dark-mode-changed="(value) => emit('onDarkModeChanged', value)"
      />
    </div>
  </div>
</template>
