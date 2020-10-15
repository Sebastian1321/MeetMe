<template>
  <Page>
    <ActionBar title="Login" />
    <ScrollView>
      <StackLayout class="home-panel">
        <Label text="Login" />
        <TextField
          v-model="email"
          hint="Email address"
          keyboardType="Email"
          returnKeyType="next"
          autocorrect="false"
        />
        <TextField
          v-model="password"
          hint="Enter your password"
          secure="true"
          returnKeyType="send"
        />
        <Button text="Einloggen" @tap="submitLogin" />
        <ActivityIndicator :busy="isBusy" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Vue from "nativescript-vue";
import App from "./App";

export default {
  methods: {
    showAlertForProp(title, message, button, prop) {
      // use css to make invalid visible or alert?
      alert({
        title,
        message,
        okButtonText: button,
      }).then(() => {
        console.log("Alert dialog closed");
        prop = "";
      });
    },
    submitLogin() {
      if (this.emailIsValid) {
        if (this.passwordIsValid) {
          this.isBusy = true;
          setTimeout(() => {
            console.log(`Login submit: ${this.email}: ${this.password}`);
            this.$navigateTo(App)
            this.email = "";
            this.password = "";
            this.isBusy = false;
            // navigate to next component
          }, 3000);
        } else {
          this.showAlertForProp(
            "Fehler",
            "Das Passwort muss mindestens 8 Zeichen behinhalten, davon ein Buchstabe und eine Nummer!",
            "OK",
            this.password
          );
        }
      } else {
        this.showAlertForProp(
          "Fehler",
          "Bitte geben Sie eine valide E-Mail ein!",
          "OK",
          this.email
        );
      }
    },
  },
  data() {
    return {
      isBusy: false,
      email: "",
      password: "",
    };
  },
  computed: {
    emailIsValid: function () {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.email
      );
    },
    passwordIsValid: function () {
      //RegEx = Minimum eight characters, at least one letter and one number:
      return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.password);
    },
  },
};
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}
.description-label {
  margin-bottom: 15;
}
</style>