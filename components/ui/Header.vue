<script setup lang="ts">
const isDark = ref(false as boolean);
const emit = defineEmits(["onDarkModeChanged"]);
onMounted(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    isDark.value = true;
    emit("onDarkModeChanged", isDark.value);
  }
});

function toggleDarkMode() {
  isDark.value = !isDark.value;
  emit("onDarkModeChanged", isDark.value);
}
</script>
<template>
  <div
    class="w-full flex flex-row justify-between items-center px-5 py-4 from-blue-900 to-purple-700 bg-gradient-to-r"
  >
    <div class="font-bold text-white font-pixels text-xl">Leonardo Mussato</div>
    <div class="w-10 h-6 relative md:hidden">
      <div class="w-full h-0.5 bg-white absolute top-0 left-0"></div>
      <div
        class="w-full h-0.5 bg-white absolute top-1/2 left-0 -translate-y-1/2"
      ></div>
      <div class="w-full h-0.5 bg-white absolute bottom-0 left-0"></div>
    </div>
    <div class="flex-row w-fit items-center gap-3 hidden md:flex">
      <UiNavigationMenu />
      <div
        @click="toggleDarkMode"
        class="rounded-full w-10 h-10 aspect-square bg-black/30 text-white flex flex-col justify-center items-center border border-white/50 cursor-pointer shadow-md"
      >
        <Transition name="fade" mode="out-in">
          <Icon v-if="!isDark" name="mdi:weather-sunny" size="2em" />
          <Icon v-else name="mdi:weather-night" size="2em" />
        </Transition>
      </div>
    </div>
  </div>
</template>
