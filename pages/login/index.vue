<script setup lang="ts">
import { useAuthStore } from "~/store";

const authStore = useAuthStore();
</script>
<template>
  <div class="flex flex-col w-full">
    <div @click="() => authStore.login()">login</div>
    <div @click="() => authStore.logout()">logout</div>
  </div>
</template>
