<template>
    <div style="text-align: center">
        <h1>Welcome, {{ name }}</h1>
        <router-link to="about">About</router-link> <br />
        <button class="logout" @click="Logout">Logout</button>
    </div>
</template>

<script>
import firebase from "firebase/app";
export default {
    data() {
        return {
            name: "",
        };
    },
    beforeMount() {
        const user = firebase.auth().currentUser;
        if (user) {
            this.name = user.email.split("@")[0];
        }
    },
    methods: {
        Logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    // Sign-out successful.
                    console.log("sign-out");
                })
                .catch((err) => {
                    // An error happened.
                    console.log(err.message);
                });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
