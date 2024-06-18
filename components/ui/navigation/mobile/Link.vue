<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  routeName: {
    type: String,
    required: true,
  },
});

function gotoRoute() {
  const router = useRouter();
  router.push({ name: props.routeName });
}
</script>
<template>
  <h3
    class="cursor-pointer select-none dark:text-white text-black text-3xl font-semibold tracking-wider"
    @click="gotoRoute"
  >
    {{ text }}
  </h3>
</template>
