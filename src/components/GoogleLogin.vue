<template>
    <div class="sign-in" style="text-align: center">
        <button class="btn-google" @click="googleSignIn">Google</button>
        <!-- <button class="btn-google" @click="facebookSignIn">facebook</button> -->
        <!-- <button class="btn-google" @click="appleSignIn">apple</button> -->
    </div>
</template>

<script>
import firebase from "firebase/app";
export default {
    methods: {
        googleSignIn() {
            var provider = new firebase.auth.GoogleAuthProvider();
            // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            firebase
                .auth()
                .signInWithPopup(provider)
                .then((result) => {
                    //signIn
                    console.log(result);
                })
                .catch((err) => {
                    // Handle Errors here.
                    console.log(err.message);
                });
        },
        facebookSignIn() {
            var provider = new firebase.auth.FacebookAuthProvider();
            provider.addScope("user_birthday");
            firebase
                .auth()
                .signInWithRedirect(provider)
                .then((result) => {
                    //signIn
                    console.log(result);
                })
                .catch((err) => {
                    // Handle Errors here.
                    console.log(err.message);
                });
        },
    },
};
</script>

<style scoped>
.sign-in button {
    margin: 0 5px;
}
</style>
