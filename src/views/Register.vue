<template>
    <h1 style="text-align: center">Register</h1>
    <div class="register">
        <form @submit.prevent="Register">
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

            <input type="submit" value="Register" />

            <p>
                Have an account?
                <router-link to="/login">Login Here</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import firebase from "firebase/app";
// import { ref } from "vue";
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        Register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => alert(err.message));
        },
    },
};
</script>

<style scoped>
.register {
    width: 300px;
    margin: 50px auto;

    /* background: lightblue; */
}
.register * {
    margin: 5px 0;
}
.register input {
    width: 100%;
}
</style>
