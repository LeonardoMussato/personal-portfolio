<script setup lang="ts"></script>
<template>
  <div class="w-screen h-screen flex flex-col">
    <UiHeader />
    <div class="w-full h-full overflow-auto flex-1">
      <slot />
      <UiFooter />
    </div>
  </div>
</template>
