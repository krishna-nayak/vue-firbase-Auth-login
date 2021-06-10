<template>
    <h1 style="text-align: center">Login</h1>
    <div class="login">
        <form @submit.prevent="Login">
            <label for="email">Email</label><br />
            <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                v-model="email"
            /><br />
            <label for="password">Password</label><br />
            <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                v-model="password"
            /><br />

            <input type="submit" value="Login" />

            <p>
                Need an account?
                <router-link to="/register">Register Here</router-link>
            </p>
        </form>
    </div>
</template>

<script>
// import { ref } from "vue";
import firebase from "firebase/app";
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        Login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        },
    },
};
</script>

<style scoped>
.login {
    width: 300px;
    margin: 50px auto;

    /* background: lightblue; */
}
.login * {
    margin: 5px 0;
}
.login input {
    width: 100%;
}
</style>
