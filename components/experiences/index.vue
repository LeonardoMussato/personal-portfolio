<script setup lang="ts">
const index = ref(0);
const experiences = ref([
  {
    title: "Vue.js",
    description: "mi piace vue perchè...",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
  },
  {
    title: "Flutter",
    description: "adoro flutter perchè...",
    imgUrl:
      "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
  },
  {
    title: "Java",
    description: "è semplicemente lo standard",
    imgUrl:
      "https://www.gcreddy.com/wp-content/uploads/2021/07/Java-Programming-Language.png",
  },
]);
function forward() {
  if (index.value < experiences.value.length - 1) {
    index.value++;
  }
}
function stepBack() {
  if (index.value >= 1) index.value--;
}
const currentExperience = computed(() => {
  return experiences.value[index.value];
});
</script>
<template>
  <div
    class="flex flex-col md:flex-row gap-10 w-full justify-center relative items-center transition-colors duration-300"
  >
    <Icon
      v-if="index > 0"
      name="mdi:arrow-left"
      size="45px"
      class="absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer bg-transparent hover:bg-blue-800 transition-all duration-300 hover:text-white text-purple-900 dark:text-purple-400"
      @click="stepBack"
    />
    <Icon
      v-if="index < experiences.length - 1"
      name="mdi:arrow-right"
      size="45px"
      class="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer bg-transparent hover:bg-blue-800 transition-all duration-300 hover:text-white text-purple-900 dark:text-purple-400"
      @click="forward"
    />
    <UiCard>
      <img
        class="md:w-52 md:h-52 w-36 h-36 aspect-square"
        :src="currentExperience.imgUrl"
        :alt="currentExperience.title"
      />
    </UiCard>
    <div class="flex flex-col gap-3">
      <div class="font-bold text-xl">{{ currentExperience.title }}</div>
      <div>{{ currentExperience.description }}</div>
    </div>
  </div>
</template>
