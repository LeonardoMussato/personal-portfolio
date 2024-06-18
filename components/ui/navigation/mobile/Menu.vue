<script setup lang="ts">
const isOpen = ref(false as boolean);
const emit = defineEmits(["onDarkModeChanged"]);
function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="w-10 h-6 relative md:hidden z-20" @click="toggleMenu">
    <div
      class="w-full h-0.5 absolute top-0 left-0 duration-300 transition-all"
      :class="{
        'rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black dark:bg-white':
          isOpen,
        'bg-white': !isOpen,
      }"
    ></div>
    <div
      class="w-full h-0.5 absolute top-1/2 left-0 -translate-y-1/2 duration-300 transition-all"
      :class="{
        'opacity-0 bg-black dark:bg-white': isOpen,
        'bg-white': !isOpen,
      }"
    ></div>
    <div
      class="w-full h-0.5 absolute bottom-0 left-0 duration-300 transition-all"
      :class="{
        '-rotate-45 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 bg-black dark:bg-white':
          isOpen,
        'bg-white': !isOpen,
      }"
    ></div>
  </div>
  <Transition name="fade">
    <div
      class="fixed left-0 top-0 w-full h-full bg-white dark:bg-black z-10"
      v-show="isOpen"
    >
      <div
        class="flex flex-col w-full items-center gap-10 h-full justify-center"
      >
        <UiNavigationMobileLink text="Homepage" routeName="index" />
        <UiNavigationMobileLink :text="'About'" :route-name="'about'" />
        <ButtonsDarkMode
          class="z-20"
          @on-dark-mode-changed="(value) => emit('onDarkModeChanged', value)"
        />
      </div>
    </div>
  </Transition>
</template>
