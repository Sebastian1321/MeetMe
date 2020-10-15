<template>
  <Page>
    <ActionBar>
      <NavigationButton @tap="goBack" android.systemIcon="ic_menu_back" />
      <Label :text="event.name"></Label>
    </ActionBar>
    <ScrollView>
      <StackLayout>
        <Image :src="event.eventPicture" width="100" height="100" />
        <Label :text="'Event:' + event.name" textWrap="true"></Label>
        <Label :text="'Kategory: ' + event.category" textWrap="true"></Label>
        <Label :text="'Name: ' + event.user.name" textWrap="true"></Label>
        <Label :text="'Alter: ' + event.user.age" textWrap="true"></Label>
        <Label :text="'Beschreibung: ' + event.description"></Label>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Frame } from "tns-core-modules/ui/frame";
import App from "./App";

export default {
  props: ["event"],
  methods: {
    onButtonTap() {
      console.log("Button was pressed");
    },
    goBack() {
        this.$navigateTo(App);
    },
  },
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>
