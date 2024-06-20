export default defineNuxtRouteMiddleware((to, from) => {
  const password = prompt("Inserisci password super segreta!");
  if (password != "ciao") {
    return navigateTo({ name: "login" });
  }
});
