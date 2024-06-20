import { useAuthStore } from "~/store";

export default defineNuxtRouteMiddleware(async (to, from) => {
  useFirebase();
  const authStore = useAuthStore();

  await authStore.init();

  if (to.meta.auth && !authStore.user) {
    return navigateTo({ name: "login" });
  }
});
