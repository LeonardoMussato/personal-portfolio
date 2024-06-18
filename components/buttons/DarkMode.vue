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
    @click="toggleDarkMode"
    class="rounded-full w-10 h-10 aspect-square bg-black/30 flex flex-col justify-center items-center border border-white/50 cursor-pointer shadow-md"
  >
    <Transition name="fade" mode="out-in">
      <Icon v-if="!isDark" name="mdi:weather-sunny" size="2em" color="white" />
      <Icon v-else name="mdi:weather-night" size="2em" color="white" />
    </Transition>
  </div>
</template>
