import { GoogleAuthProvider, type User } from "firebase/auth";
import { defineStore } from "pinia";
import { useFirebaseAuth } from "~/composables/firebase";

export const useAuthStore = defineStore("auth-store", {
  state: () => ({
    user: null as null | User,
    token: null as null | string,
  }),
  actions: {
    async init() {
      const { auth } = useFirebaseAuth();
      auth.onAuthStateChanged((user) => {
        if (!user) {
          this.user = null;
          return;
        }
        this.user = user;
      });

      await auth.authStateReady();
    },
    async login() {
      const auth = useFirebaseAuth();
      const rawCredentials = await auth.signIn();
      // const credential =
      //   GoogleAuthProvider.credentialFromResult(rawCredentials);
      // if (!credential) {
      //   return;
      // }
      // this.token = credential.accessToken!;
      // this.user = rawCredentials.user;
    },
    async logout() {
      const auth = useFirebaseAuth();
      await auth.signOutFromSession();
      // this.user = null;
      // this.token = null;
    },
  },
  getters: {},
});
