<template>
    <router-view />
</template>

<script>
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";

export default {
    setup() {
        const router = useRouter();
        const route = useRoute();

        onBeforeMount(() => {
            firebase.auth().onAuthStateChanged((user) => {
                console.log(route.path);
                if (!user) {
                    router.replace("/login");
                } else if (
                    route.path == "/login" ||
                    route.path == "/register"
                ) {
                    router.replace("/");
                }
            });
        });
    },
};
</script>

<style>
* {
    box-sizing: border-box;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    /* text-align: center; */
    color: #2c3e50;
}
</style>
