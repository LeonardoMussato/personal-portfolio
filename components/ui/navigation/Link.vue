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
  <li class="cursor-pointer select-none text-white" @click="gotoRoute">
    {{ text }}
  </li>
</template>
